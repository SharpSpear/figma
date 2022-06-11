import React from "react";
import PassiveImage from '../../../assets/img/passive.png'

const RelaxComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="title passive-title" style={{paddingTop: "40px"}}>
            Passive Income<br/>is <span style={{color: "#3772FF"}}>Relaxing</span>
          </div>
          <div className="text" style={{paddingRight: '25px'}}>
            Tired of looking at charts and stressing over the next red candle?
            Worried your latest Defi investment could get exploited or rug pulled?
            With Eternity Earn, you can sit back, relax and let the contract do the work with for you. By depositing $CRO, you'll earn a passive daily return while you sleep, eat, walk the dog or spend time with the family.
          </div>
          <button className="white-btn btn"  style={{marginTop: "60px"}}>Join our Telegram</button>
        </div>
        <div className="col-6">
          <img src={PassiveImage} className="passive-image" alt="passive"/>
        </div>
      </div>
    </>
  )
}

export default RelaxComponent;