import Home from "./pages/Home";
import loaderimg from "./assets/loader2.json";
import add from "./assets/add.png";

import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, Routes, Route, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Navbar from "./component/Navbar";
import { auth, GoogleProvider } from "./config/firebase";

import { toast } from "react-toastify";

import { signInWithPopup, signOut } from "firebase/auth";
import Blogs from "./component/Blogs";
import Blogread from "./component/Blogread";
import CreateBlog from "./pages/CreateBlog";
import Error404 from "./pages/Error404";
import UpdateBlog from "./pages/UpdateBlog";

function App() {
  const [loader, setloader] = useState(true);
  const [curr, setcurr] = useState();
  const notify = (a) => toast.success(a);
  const notifyerr = (a) => toast.error(a);
  const location = useLocation();

  useLayoutEffect(() => {
    if (localStorage.getItem("user")) {
      setcurr(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const signinwithgoogle = async () => {
    setloader(true)
    try {
      await signInWithPopup(auth, GoogleProvider);
      const data = {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        name: auth.currentUser.displayName,
        img: auth.currentUser.photoURL,
      };
      setcurr(data);
      localStorage.setItem("user", JSON.stringify(data));
      setloader(false)
      notify(`Welcome!! ${data.name} `);
    } catch (err) {
      console.log(err);
      notifyerr("There is an error while logging In");
    }
  };
  const signout = async () => {
    setloader(true)
    try {
      await signOut(auth);
      setcurr();
      localStorage.clear();
      setloader(false)
      notify("Successfully Logged Out");
    } catch (err) {
      notifyerr("There is an error while logging Out");
      console.log(err);
    }
  };

  const settingloader = () => {
    setTimeout(() => {
      setloader(false);
    }, 1500);
    setloader(true);
  };
  useEffect(() => {
    if (!loader) {
      setloader(true);
      settingloader();
    } else settingloader();
  }, [location.pathname]);

  return (
    <>
      {loader ? (
        <>
          <div className="w-screen h-screen">
            <Lottie
              animationData={loaderimg}
              className="h-screen scale-50 w-screen sm:scale-75"
            />
          </div>
        </>
      ) : (
        <>
          {curr && (
            <Link to="/createblog">
              <img
                className=" rounded-full border-2 cursor-pointer fixed bottom-10 z-50 shadow-lg sm:right-5 right-16 sm:bottom-5 sm:scale-100 scale-125"
                src={add}
                alt=""
              />
            </Link>
          )}
          <header className="fixed z-40 top-0 w-screen">
            <Navbar signin={signinwithgoogle} signout={signout} user={curr} />
          </header>

          <Routes>
            <Route
              path="/"
              element={<Home signin={signinwithgoogle} user={curr} />}
            />
            <Route
              path="/ContactUs"
              element={<Home signin={signinwithgoogle} user={curr} />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<Blogread />} />
            <Route path="/createblog" element={<CreateBlog user={curr} />} />
            <Route
              path="/blogs/updateblog/:id"
              element={<UpdateBlog user={curr} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <footer className="mt-auto bg-black text-white  flex flex-col gap-2 justify-center">
            <div>
              <h1 className="text-gray-400 text-xl mt-2 font-semibold sm:text-xl text-center">
                Developed by Samarth Kashayp
              </h1>
            </div>
            <div className="flex gap-4 mx-auto">
              <a
                href="https://github.com/samarthkashyap-1"
                target="_blank"
                className="hover:underline text-gray-500 hover:text-gray-400 transition-colors"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/samarthkashyap_/"
                target="_blank"
                className="hover:underline text-gray-500 hover:text-gray-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/samarth-kashyap-5249b9207/"
                target="_blank"
                className="hover:underline text-gray-500 hover:text-gray-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/samarthkashyap0"
                target="_blank"
                className="hover:underline text-gray-500 hover:text-gray-400 transition-colors"
              >
                Twitter
              </a>
            </div>
            <div className="mx-auto mb-2">
              <p className="text-sm text-gray-500">©2023 All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;
