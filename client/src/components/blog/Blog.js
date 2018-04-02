import React from "react";
import IconText from "../IconText";

const Blog = () => {
  const intro = IconText(
    "diamond",
    "SOME MESSY THOUGHTS ON OUR BEAUTIFUL WORLD",
    "diamond-icon"
  );

  return (
    <div>
      <div className="row">
        <div className="col-md-offset-2 col-md-8 text-center">
          <div>{intro}</div>
          <div
            style={{
              lineHeight: "1.8em",
              color: "#848789",
              wordSpacing: "2px",
              fontSize: "18px",
              padding: "10px 0",
              textAlign: "justify"
            }}
          >
            This is the collection of thoughts, ponderings, and encouragements
            that I have gathered throughout my colorful journey as an organizer.
            The wonderful people I have worked with and the life lessons learned
            are the building blocks on my foundation of faith that form the
            dwelling for my soul.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
