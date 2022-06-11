import React from "react";
import AdventureComponent from "../components/Adventure/Adventure";
import CompoundComponet from "../components/Compound/Compound";
import MetaMaskComponent from "../components/MetaMask/MetaMask";
import PassiveComponent from "../components/Passive/Passive";
import ReferralComponent from "../components/Referral/Referral";
import StrategyComponent from "../components/Strategy/Strategy";
import VisionComponent from "../components/Vision/Vision";

const Home = () => {
  return (
    <>
    <PassiveComponent/>
    <StrategyComponent/>
    <ReferralComponent/>
    <VisionComponent/>
    <MetaMaskComponent/>
    <CompoundComponet/>
    <AdventureComponent/>
    </>
  )
}

export default Home;