import Home from "./pages/Home";
import loaderimg from "./assets/loader2.json";

import {
  useEffect,
  useState,
  useLayoutEffect
} from "react";
import { useLocation,
  Routes,
  Route} from "react-router-dom"
import Lottie from "lottie-react";
import Navbar from "./component/Navbar";
import { auth, GoogleProvider } from "./config/firebase";

import { toast } from "react-toastify";


import { signInWithPopup, signOut } from "firebase/auth";
import Blogs from "./component/Blogs";
import Blogread from "./component/Blogread";

function App() {
  const [loader, setloader] = useState(true);
  const [curr, setcurr] = useState();
   const notify = (a) => toast.success(a);
   const notifyerr = (a) => toast.error(a);
   const location = useLocation()
  

  useLayoutEffect(() => {
    if (localStorage.getItem("user")) {
      setcurr(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const signinwithgoogle = async () => {
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
      notify(`Welcome!! ${data.name} `);
    } catch (err) {
      console.log(err);
      notifyerr("There is an error while logging In");
    }
  };
  const signout = async () => {
    try {
      await signOut(auth);
      setcurr();
      localStorage.clear();
      
      notify("Successfully Logged Out");
    } catch (err) {
      notifyerr("There is an error while logging Out");
      console.log(err);
    }
  };

  
  useEffect(() => {
    
    const settingloader =()=>{
      
      setTimeout(() => {
        setloader(false);
      },);
      setloader(true)
    }
  if (!loader){
    setloader(true)
    settingloader()
  }else settingloader()
  }, [location.pathname]);

  return (
    <>
      
        {
      loader ? <>
      <div className="w-screen h-screen">
        <Lottie
          animationData={loaderimg}
          
          className="h-screen w-screen"
          />
      </div>
    </> :
        <>
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
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/blogs/:id" element={<Blogread/>} />
            </Routes>
         
        </>
        }
     
    </>
  );
}

export default App;
