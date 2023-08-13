import React, { useLayoutEffect, useState } from "react";
import Blog from "./Blog";
import { db } from "../config/firebase";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Blogs() {
  const Blogref = collection(db, "Glogs");
  const [blogdata, setblogdata] = useState([]);
  const notify = (a) => toast.success(a);
  const notifyerr = (a) => toast.error(a);

  const gettingblogs = async () => {
    try {
      const blogs = await getDocs(Blogref);
      const filtereddata = blogs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setblogdata(filtereddata);
    } catch (err) {
      console.log(err);
    }
  };
  useLayoutEffect(() => {
    gettingblogs();
  }, []);

  const handledel = async (id) => {
    try {
      const Glogtodel = doc(db, "Glogs", id);
      await deleteDoc(Glogtodel);

      gettingblogs();
      notify("Glog Deleted");
    } catch (err) {
      notifyerr("Something went Wrong!!");
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-32">
      <ToastContainer position="top-center" />
      <div>
        <h1 className="text-5xl text-start sm:text-4xl font-bold">Glogs</h1>
        <hr className="border-2 rounded-full mt-5 border-[#B7D893]" />
      </div>
      <div className="grid grid-cols-3 gap-10 sm:p-2 p-5 lg:grid-cols-2 sm:grid-cols-1">
        {blogdata.map((blog) => (
          <Blog content={blog} handledel={handledel} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
