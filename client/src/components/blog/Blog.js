import React from "react";
import Intro from "../Intro";

const Blog = () => {
  return Intro(
    { className: "glyphicon glyphicon-folder-open" },
    "diamond",
    "SOME MESSY THOUGHTS ON OUR BEAUTIFUL WORLD",
    "This is the collection of thoughts, ponderings, and encouragements that I have gathered throughout my colorful journey as an organizer. The wonderful people I have worked with and the life lessons learned are the building blocks on my foundation of faith that form the dwelling for my soul."
  );
};

export default Blog;
