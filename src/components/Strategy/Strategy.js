import React from "react";
import Slider from "./Slider/Slider";
import "./Strategy.css";

const StrategyComponent = () => {
  return (
    <div className="strategy">
      <div className="container text-center">
        <div className="title">Strategy</div>
        <div className="text text-area">
          Once $CRO deposits are locked in the Eternity Earn contract, users are
          encouraged to compound their rewards six days per week and then claim
          rewards on the seventh day (6:1). By following the recommended
          compound/claim schedule, the maximum daily rewards (up to 8%) can be
          achieved, allowing for a typical return on investment within four to
          six weeks. All rewards are paid in $CRO tokens based on the total
          value locked (TVL) in the contract liquidity pool and activity during
          the day by other users of the system. The value of $CRO is also
          variable and can fluctuate with market conditions.
        </div>
        <Slider />
        <button className="blue-btn btn" style={{ marginTop: "180px" }}>
          Launch Dapp
        </button>
      </div>
    </div>
  );
};

export default StrategyComponent;
