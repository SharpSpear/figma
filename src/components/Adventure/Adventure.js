import React from "react";
import "./Adventure.css";

const AdventureComponent = () => {
  return (
    <div className="adventure">
      <div className="container text-center">
        <div className="subtitle">START YOUR ADVENTURE</div>
        <div className="title">
          Still Not Convinced?
          <br />
          Take a test drive for less than a cup of coffee.
        </div>
        <div className="text">
          There is no minimum investment so deposit just a few $CRO and learn
          why <br /> Eternity Earn is different!
        </div>
        <button className="blue-btn btn">Launch Dapp</button>
      </div>
    </div>
  );
};

export default AdventureComponent;
