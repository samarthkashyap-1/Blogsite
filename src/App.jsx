
import Home from './pages/Home'
import loaderimg from "./assets/loader2.json"
import cul from "./assets/cultivate.json"
import { useEffect, useState } from 'react'
import Lottie from "lottie-react";


function App() {
 const [loader,setloader] = useState(true)

 useEffect(()=>{
    setTimeout(()=>{
      setloader(false)
      console.log("done")
    },3000)
 },[])

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
    </> : <>

      <Home/>
    </>
    }

    </>
   
    
  );
}

export default App
