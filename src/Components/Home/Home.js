import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Image">
        <img
          src={`${process.env.PUBLIC_URL}/girl_laptop.png`}
          alt="This is me"
        />
      </div>
      <div className="desc">
        <p>Hello</p>
        <p>I am Savitri Khyadad</p>
        <p>Cloud Support Associate at Amazon Web Services(AWS)</p>
      </div>
    </div>
  );
};

export default Home;
