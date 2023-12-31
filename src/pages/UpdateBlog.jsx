import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateDoc, collection, getDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateBlog({ user }) {
  const notify = (a) => toast.success(a);
  const notifyerr = (a) => toast.error(a);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const Navigate = useNavigate();
  const Blogupdateref = doc(db, "Glogs", id);
  const [blogtoread, setblogtoread] = useState();

  const Blogref = collection(db, "Glogs");

    useEffect(() => {
      if (!user) {
        navigate("/");
        notifyerr("Please Login");
      }
    });

  const gettingblog = async () => {
    try {
      const data = await getDoc(Blogupdateref);
      const filtereddata = { ...data.data(), id: data.id };
      setblogtoread(filtereddata);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gettingblog();
  }, []);

  const handleupdate = async (e) => {
    try {
      e.preventDefault();
      const updatedblog = {
        Category: e.target.category.value,
        Title: e.target.title.value,
        content: e.target.content.value,
        UpdatedOn: new Date(),
      };
      console.log(updatedblog)
      await updateDoc(Blogupdateref, updatedblog);

      e.target.title.value = "";
      e.target.content.value = "";
      notify("Glog Updated");
      navigate("/glogs");
    } catch (err) {
      console.log(err);
      notifyerr("Something went wrong");
    }
  };

  return (

    <>
    {blogtoread && <div className="w-3/4 h-screen mx-auto mt-28">
      <ToastContainer position="top-center" />
      <div>
        <h1 className="text-6xl sm:text-4xl font-bold">Update Glog</h1>
        <div className=" w-2/3  py-3 rounded-2xl px-10 shadow-xl sm:w-full bg-[#B7D893] text-white mx-auto mt-10">
          <form onSubmit={handleupdate}>
            <div className="flex w-full mx-auto  flex-col gap-6 mt-10 items-center justify-center">
              <div className="w-full ">
                <label htmlFor="name" className="text-xl font-medium"></label>

                <select
                  className="p-2 text-base shadow-xl rounded-xl text-black mt-2 w-fit"
                  id="browsers"
                  required
                  name="category"
                  defaultValue={blogtoread.Category}
                  >
                  <option value="Others"> Select Category </option>
                  <option value="Technology"> Technology </option>
                  <option value="Science">Science</option>
                  <option value="Art">Art</option>
                  <option value="News">News</option>

                  <option value="Politics">Politics</option>
                  <option value="Travels">Travels</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-xl font-medium"></label>
                <input
                  className="p-3 text-xl sm:text-lg font-medium shadow-xl rounded-xl text-black mt-2 w-full"
                  type="text"
                  placeholder="Title..."
                  name="title"
                  id="email"
                  minLength="3"
                  defaultValue={blogtoread.Title}
                  required
                  />
              </div>
              <div className="w-full">
                <label htmlFor="msg" className="text-xl font-medium"></label>
                <textarea
                  className="p-3 text-lg sm:text-base font-medium shadow-xl  rounded-xl text-black mt-2 w-full "
                  name="content"
                  placeholder="Description..."
                  id="msg"
                  cols=""
                  minLength="20"
                  defaultValue={blogtoread.content}
                  rows="6"
                  required
                  ></textarea>
              </div>
              <div>
                <input
                  className=" cursor-pointer border-2 text-lg rounded-xl shadow-xl transition-colors duration-200 ease-in font-medium mt-2 hover:text-black hover:bg-white hover:border-black border-white w-fit mx-auto p-1 px-4"
                  type="submit"
                  value="Publish"
                  />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>}
                  </>
  );
}

export default UpdateBlog;
