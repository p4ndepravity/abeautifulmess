import React from "react";
import IconText from "./IconText";
import RowTextRight from "./RowTextRight";
import RowTextLeft from "./RowTextLeft";
import RowTextMid from "./RowTextMid";

const Landing = () => {
  const iconText = IconText("about", "MY STORY", "texas-icon");
  const introTextStyle = {
    lineHeight: "1.8em",
    color: "#848789",
    wordSpacing: "2px",
    fontSize: "18px",
    padding: "10px 0",
    textAlign: "justify"
  };

  return (
    <div>
      <div className="row" style={{ margin: "0" }}>
        <div className="col-md-offset-2 col-md-8 text-center">
          <div>{iconText}</div>
          <div style={introTextStyle}>
            <strong>A Beautiful Mess</strong> was birthed out of a dream of
            helping people. Not knowing what it would look like at the time, but
            Rachel made a decision to leave the corporate world & head out on
            her own. Putting faith in all that she believes in, she has had the
            opportunity to help people take an important part of their life
            back. Through consulting, purging & organizing, her goal is to
            provide clients a safe place to lean on for help. With a little
            courage & action, allow her to help you in areas that may just
            simply be cluttered.
          </div>
        </div>
      </div>
      <RowTextRight
        leftImageName="rachel-sorting-glasses"
        rightImageName="silver"
      />
      <RowTextLeft leftImageName="china" rightImageName="rachel-island-pose" />
      <RowTextMid
        leftImageName="rachel-cubby"
        rightImageName="rachel-bookshelf"
        midImageName="hand-plates"
      />
    </div>
  );
};

export default Landing;
