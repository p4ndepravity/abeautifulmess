import React from "react";
import IconText from "./IconText";

const RowTextRight = ({ leftImageName, rightImageName }) => {
  const iconText = IconText("services", "CONSULTATION", "bubble-icon");

  const leftImage = require(`../images/${leftImageName}.jpg`);
  const leftImageTag = (
    <div
      style={{
        backgroundImage: `url(${leftImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        position: "relative"
      }}
    />
  );

  const rightImage = require(`../images/${rightImageName}.jpg`);
  const rightImageTag = (
    <div
      style={{
        backgroundImage: `url(${rightImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        width: "100%",
        position: "absolute",
        padding: "0",
        bottom: "0"
      }}
    />
  );

  return (
    <div
      className="row"
      style={{ paddingTop: "40px", margin: "0", height: "600px" }}
    >
      <div className="col-md-8" id="work" style={{ padding: "0", margin: "0" }}>
        {leftImageTag}
      </div>
      <div
        className="col-md-4 text-center"
        style={{ padding: "0", height: "600px" }}
      >
        <div>
          <div style={{ marginTop: "70px" }}>{iconText}</div>
          <div
            style={{
              lineHeight: "1.8em",
              color: "#848789",
              wordSpacing: "2px",
              fontSize: "14px",
              padding: "10px 60px",
              textAlign: "justify"
            }}
          >
            Where the vision is created. We meet with clients & start to paint a
            picture & clearly state a purpose. We discuss ideas, advice &
            expectations. The introduction to the "101".
          </div>
        </div>
        {rightImageTag}
      </div>
    </div>
  );
};

export default RowTextRight;
