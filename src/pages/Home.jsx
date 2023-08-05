import React from 'react'
import Navbar from '../component/navbar'
import LandingTheme from '../component/LandingTheme';
function Home() {
  return (
    <div className="">
      <header className="fixed z-50 top-0 w-screen">
        <Navbar />
      </header>
     <div className='flex justify-center'>

      <LandingTheme/>
     </div>
     
      
    </div>
  );
}

export default Home
