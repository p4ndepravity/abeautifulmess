import React from "react";

const IconText = (id, title, imageName = "star-icon") => {
  return (
    <div id={id}>
      <div style={{ marginBottom: "15px" }}>
        <img src={require(`../images/${imageName}.png`)} alt="" />
      </div>
      <div
        style={{
          color: "#353738",
          fontSize: "18px",
          fontWeight: "600",
          letterSpacing: "2px",
          padding: "12px 0"
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default IconText;
