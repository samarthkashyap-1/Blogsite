import React from 'react'
import Navbar from '../component/Navbar'
import LandingTheme from '../component/LandingTheme';
import { Fade } from "react-awesome-reveal";
import WhyGlog from '../component/WhyGlog';
function Home() {
  return (
    <div className="">
      <header className="fixed z-50 top-0 w-screen">
        <Navbar />
      </header>
<Fade triggerOnce>

        <div className="flex justify-center">
          <LandingTheme />
        </div>
</Fade>
        <div className='flex justify-center'>
          <WhyGlog/>
        </div>
        
      
    </div>
  );
}

export default Home
