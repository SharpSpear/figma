import React from "react";
import RelaxComponent from "./Relax/Relax";
import StepList from "./Step/Steplist";
import './Passive.css'
import WorkComponent from "./Work/Work";

const PassiveComponent = () => {
  return (
    <div className="passive">
      <div className="container">
        <RelaxComponent />
        <WorkComponent />
        <StepList />
        <div className="text-center">
          <button className="btn white-btn">Add Cronos to MetaMask</button>
        </div>
      </div>
    </div>
  );
};

export default PassiveComponent;
