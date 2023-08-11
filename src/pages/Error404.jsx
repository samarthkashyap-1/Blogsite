import React from 'react'
import err from "../assets/error.json"
import Lottie from "lottie-react";

function Error404() {
  return (
    <div className="w-3/4 mx-auto ">
      <Lottie
        animationData={err}
        className="h-screen scale-75"
        loop={true}
      />
    </div>
  );
}

export default Error404
