import React from "react";
import './Referral.css';
import ReferralIcon from '../../assets/img/circle-referral.png'
import DepositIcon from '../../assets/img/circle-deposit.png'
import CompoundIcon from '../../assets/img/circle-compound.png'
import ClaimIcon from '../../assets/img/circle-claim.png'

const ReferralComponent = () => {
  return (
    <div className="referral">
      <div className="container">
        <div className="title text-center">
          Referral Rewards and Taxes
        </div>
        <div className="tax-list">
          <div className="tax">
            <img src={ReferralIcon} alt="Referral Rewards"/>
            <div className="line" />
            <div className="subtitle">Referral Rewards</div>
            <div className="subtext">By referring another investor, you'll receive 12% of their deposits and compounds, paid from the pool, not the investor.</div>
          </div>
          <div className="tax">
            <img src={DepositIcon} alt="Deposit Tax"/>
            <div className="line" />
            <div className="subtitle">Deposit Tax</div>
            <div className="subtext">A 5% tax is paid on deposits of $CRO into the contract. The tax is deposited into the Grand Reserve for development and marketing.</div>
          </div>
          <div className="tax">
            <img src={CompoundIcon} alt="Compound Tax"/>
            <div className="line" />
            <div className="subtitle">Compound Tax</div>
            <div className="subtext">There is no tax paid on compounding available $CRO rewards. A small gas fee is paid for each compound transaction.</div>
          </div>
          <div className="tax">
            <img src={ClaimIcon} alt="Claim Tax"/>
            <div className="line" />
            <div className="subtitle">Claim Tax</div>
            <div className="subtext">A 5% tax is paid on withdrawls of available $CRO rewards. The tax is deposited into the Grand Reserve for development and marketing</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralComponent;