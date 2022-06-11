import React from "react";
import "./Compound.css";
import { CheckIcon } from "../../icons";
import PhoneImage from "../../assets/img/phone.png";

const CompoundComponet = () => {
  return (
    <div className="compound">
      <div className="container">
        <div className="field">
          <div className="flex">
            <div className="image">
            <img src={PhoneImage} className="image-field" alt="phone" />
            </div>
            
            
            <div className="title">Just Compound & Chill</div>
            
          </div>

          <div className="row">
            <div className="col-4">
              <div className="text compound-text">
                We make crypto passive income easy through our simple Dapp user
                interface and proven investment strategy.
              </div>
              <div className="subtitle">
                <div>
                  <CheckIcon /> Earn Up to 8% per Day
                </div>
                <div>
                  <CheckIcon /> Incorporated in Florida, USA
                </div>
                <div>
                  <CheckIcon /> Fully Doxxed Team
                </div>
                <div>
                  <CheckIcon /> 12% Referral Rewards
                </div>
                <div>
                  <CheckIcon /> Future Revenue Streams
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <button className="blue-btn btn">Get Started</button>
            <button className="white-btn btn">Join our Telegram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundComponet;
