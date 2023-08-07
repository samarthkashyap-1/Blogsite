import React from 'react'
import Lottie from "lottie-react";
import cultivate from "../assets/cultivate.json";
import expand from "../assets/expand.json";
import boost from "../assets/boost.json";
import { Fade } from "react-awesome-reveal";


function WhyGlog() {
  // const whyglog = useRef(null);
  return (
    <>
      <div
        className="flex flex-col gap-10 w-3/4 mb-10 mt-20 "
        
      >
        <Fade triggerOnce delay={20}>
          <div className="mb-5">
            <h1 className="text-center text-6xl font-bold sm:text-4xl">
              Why Glog?
            </h1>
          </div>
          <div className="flex p-5 bg-[#B7D893] sm:flex-col rounded-2xl w-2/3 sm:w-fit">
            <div className="w-full h-fit shadow rounded-2xl bg-white">
              <Lottie
                animationData={cultivate}
                className="h-72 w-72 sm:w-full sm:h-60"
                loop={true}
              />
            </div>
            <div className="p-5 flex flex-col gap-5">
              <p className="text-3xl font-semibold sm:text-xl">
                Cultivate Your Ideas
              </p>
              <p className="text-xl sm:text-base">
                Glog is more than just a blog platform; it's a vibrant community
                where your ideas can take root, flourish, and evolve. Share your
                unique perspective on a wide range of topics and watch as your
                thoughts inspire discussions and new perspectives.
              </p>
            </div>
          </div>

          <div className="flex p-5 bg-[#009BA3] sm:flex-col rounded-2xl w-2/3 sm:w-fit sm:ml-0 ml-auto">
            <div className="w-full h-fit shadow rounded-2xl bg-white">
              <Lottie
                animationData={expand}
                className="h-72 w-72 sm:w-full sm:h-60"
                loop={true}
              />
            </div>
            <div className="p-5 flex flex-col gap-5">
              <p className="text-3xl font-semibold sm:text-xl">
                Explore Your Knowledge
              </p>
              <p className="text-xl sm:text-base">
                Our diverse collection of blogs covers a multitude of subjects,
                from technology and science to art and culture. Immerse yourself
                in a world of knowledge and expand your horizons as you engage
                with thought-provoking content from like-minded individuals.
              </p>
            </div>
          </div>

          <div className="flex p-5 bg-[#B7D893] sm:flex-col rounded-2xl w-2/3 sm:w-fit">
            <div className="w-full h-fit shadow rounded-2xl bg-white">
              <Lottie
                animationData={boost}
                className="h-72 w-72 sm:w-full sm:h-60"
                loop={true}
              />
            </div>
            <div className="p-5 flex flex-col gap-5">
              <p className="text-3xl font-semibold sm:text-xl">
                Boost Your Growth
              </p>
              <p className="text-xl sm:text-base">
                As you contribute to Glog, you'll find your skills and influence
                growing. Connect with fellow bloggers, receive feedback, and
                learn from others, all while building a dedicated audience that
                values your insights.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default WhyGlog
