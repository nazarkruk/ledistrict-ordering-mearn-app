import React from "react";
import { heroData } from "../assets/data/data";
// import components
import Header from "./Header";

const Hero = () => {
  // destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      {/* header */}
      <Header />
      <div className="container mx-auto min-h-[980px] flex justify-center items-center">
        {/* text */}
        <div
          initial="hidden"
          whileInView={"show"}
          className="text-center flex flex-col items-center"
        >
          {/* pretitle */}
          <div className="text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1">
            {pretitle}
          </div>
          {/* title */}
          <h1 className="h1 mb-5">{title}</h1>
          {/* subtitle */}
          <p className="text-white max-w-[540px] mb-8">{subtitle}</p>
          {/* button */}
          <div>
            <button className="btn">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
