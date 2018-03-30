import React from "react";

const Intro = ({ className }, id, title, content) => {
  return (
    <div className="container-fluid intro" id={id}>
      <div className="row" style={{ padding: "40px 0" }}>
        <div className="col-md-8 col-md-offset-2 text-center">
          <div
            className={`${className}`}
            style={{ fontSize: "48px", marginBottom: "20px" }}
          />
          <div style={{ marginBottom: "20px" }}>
            <h4>{title}</h4>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
