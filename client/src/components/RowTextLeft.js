import React from "react";
import IconText from "./IconText";

const RowTextLeft = ({ leftImageName, rightImageName }) => {
  const iconText = IconText("work", "Purging", "house-icon");
  const iconTextStyle = {
    lineHeight: "1.8em",
    color: "#848789",
    wordSpacing: "2px",
    fontSize: "14px",
    padding: "10px 60px",
    textAlign: "justify"
  };

  const leftImage = require(`../images/${leftImageName}.jpg`);
  const leftImageTag = (
    <div
      style={{
        backgroundImage: `url(${leftImage})`,
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

  const rightImage = require(`../images/${rightImageName}.jpg`);
  const rightImageTag = (
    <div
      style={{
        backgroundImage: `url(${rightImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        position: "relative"
      }}
    />
  );

  return (
    <div className="row" style={{ margin: "0", height: "600px" }}>
      <div
        className="col-md-4 text-center"
        style={{ padding: "0", height: "600px" }}
      >
        <div>
          <div style={{ marginTop: "70px" }}>{iconText}</div>
          <div style={iconTextStyle}>
            Where the magic starts to happen. We work together with each
            individual client & start to bring to life our plan created in the
            consult. To discard, gift or donate the excess or expired.
          </div>
        </div>
        {leftImageTag}
      </div>
      <div className="col-md-8" style={{ padding: "0", margin: "0" }}>
        {rightImageTag}
      </div>
    </div>
  );
};

export default RowTextLeft;
