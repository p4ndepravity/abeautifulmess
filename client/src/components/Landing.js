import React from "react";
import Intro from "./Intro";

const Landing = () => {
  return Intro(
    { className: "glyphicon glyphicon-ice-lolly-tasted" },
    "about",
    "MY STORY",
    "Find your Ahh moment..."
  );
};

export default Landing;
