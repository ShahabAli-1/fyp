import React from "react";
import Header from "../Components/Header";
import hammericon from "../images/hammericon.png";
const Aboutus = () => {
  return (
    <div>
      <Header />
      <h1 className="font-extrabold w-full text-center text-4xl font-inter mb-4">
        About Us
      </h1>
      <div>
        <div>
          <img src={hammericon} />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
