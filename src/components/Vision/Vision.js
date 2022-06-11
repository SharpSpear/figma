import React from 'react'
import './Vision.css'
import RocketImage from '../../assets/img/rocket.png'

const VisionComponent = () => {
  return (
    <div className='vision'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='subtitle'>ROADMAP</div>
          </div>
          <div className='col-6'>
            <div className='title'>Our Vision</div>
            <div className='text'>
              Our goal is to bring DeFi to the masses by streaming how users interact with the Dapp on mobile devices and expand the miner rewards pool application to other blockchains for increased liquidity and sustainability.
            </div>
          </div>
        </div>
        <div className='row' style={{marginTop: "200px"}}>
        <div className='col-8'>
            <img src={RocketImage} className="rocket-img" alt="Rocket"/>
          </div>
          <div className='col-4'>
            <div className='phase'>
              <button className='button btn-purple'>01</button>
              <div className='subtitle'>Phase 1 - Up to 8% $CRO Miner</div>
              <ul className='subtext'>
                <li>Launch Giga Mina on Cronos Chain</li>
                <li>Establish Main Telegram Group</li>
                <li>Daily Voice Chats with Community</li>
                <li>Launch Central Community Marketing Efforts (Shill Group)</li>
              </ul>
            </div>
            <div className='phase'>
              <button className='button btn-pink'>02</button>
              <div className='subtitle'>Phase 2 - 2% Daily ROI Dapp</div>
              <ul className='subtext'>
                <li>Stealth launch of new DRIP Upgrade token</li>
                <li>Upgraded and integrated UI</li>
                <li>Publish Whitepaper for DRIP Upgrade token</li>
                <li>Certik and Rude Longue Audits</li>
              </ul>
            </div>
            <div className='phase'>
              <button className='button btn-green'>03</button>
              <div className='subtitle'>Phase 3 - Market Expansion</div>
              <ul className='subtext'>
                <li>Cross chain Giga Miner rollout - AVAX, Cosmos, Solana</li>
                <li>Ability to purchase token or $CRO and deposit to contracts from mobile app using flat credit card</li>
                <li>Lending protocol for DRIP Upgrade token</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default VisionComponent;