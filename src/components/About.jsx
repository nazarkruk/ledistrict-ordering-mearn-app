import React from "react";
import aboutImg from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl front-medium ">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            laborum. Voluptas nemo facere molestiae nihil eligendi officia, quos
            quod, dolor expedita rerum optio laudantium aut? Doloribus maxime
            animi minus architecto!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImg}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
