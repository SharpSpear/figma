import React, { useEffect, useState } from "react";
import "./Slider.css";
import Claim1Image from "../../../assets/img/claim1.png";
import Claim2Image from "../../../assets/img/claim2.png";
import Claim3Image from "../../../assets/img/claim3.png";

const delay = 5000;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => setSlideIndex((index) => index === 2 ? 0 : index + 1 ), delay);
  }, [slideIndex])
  
  return (
    <>
      <div className="sliders">
        <div className={slideIndex === 0 ? "slider active" : "slider"}>
          <div className="claim text-center">
            <img src={Claim1Image} className="slider-image" alt="Claim1" />
            <div className="subtitle">6:1 Compound/Claim</div>
            <div className="subtext">
              This is the lowest compound rate to maintain the maximum daily ROI
              of up to 8% and still get a weekly payout. When TVL is decreasing
              and the price of $CRO is decreasing, this schedule may not keep up
              with reward rate decay.
            </div>
          </div>
        </div>

        <div className={slideIndex === 1 ? "slider active" : "slider"}>
          <div className="claim text-center">
            <img src={Claim2Image} className="slider-image" alt="Claim2" />
            <div className="subtitle">13:1 Compound/Claim</div>
            <div className="subtext">
              This schedule allows a bi-monthly pay day while growing your $CRO
              invested in the contract at a higher rate. Schedules with a higher
              compound rate can overcome reward decay and leapfrog other
              investors.
            </div>
          </div>
        </div>

        <div className={slideIndex === 2 ? "slider active" : "slider"}>
          <div className="claim text-center">
            <img src={Claim3Image} className="slider-image" alt="Claim3" />
            <div className="subtitle">29:1 Compound/Claim</div>
            <div className="subtext">
              Claiming only once per month is not for everyone, however, smaller
              initial investments benefit from aggressive compounding and
              allowing their $CRO deposits to grow. This is a longer-term
              strategy with higher.
            </div>
          </div>
        </div>
      </div>
      <div className="dots">
        <button
          onClick={() => setSlideIndex(0)}
          className={slideIndex === 0 ? "dot active" : "dot"}
        />
        <button
          onClick={() => setSlideIndex(1)}
          className={slideIndex === 1 ? "dot active" : "dot"}
        />
        <button
          onClick={() => setSlideIndex(2)}
          className={slideIndex === 2 ? "dot active" : "dot"}
        />
      </div>
    </>
  );
};

export default Slider;
