import React from "react";
import { ArrowIcon } from "../../icons";
import "./MetaMask.css";
import AddImage from "../../assets/img/add.png";
import TextImage from "../../assets/img/textfield.png";

const MetaMaskComponent = () => {
  return (
    <div className="metamask">
      <div className="container">
        <div className="title text-center">How to Add Cronos to MetaMask</div>
        <div className="text text-center">
          Before interacting with the Eternity Earn Dapp, you must add the
          Cronos Chain to
          <br />
          MetaMask or Trust Wallet. Below are instructions on how to add Cronos.
        </div>
        <div className="network-field">
          <div className="row text-center">
          
            <div className="col-6">
            
              <img src={AddImage} alt="Add" />
              <div className="step-title">Step 1</div>
              <div className="subtitle">Add Network</div>
              <div className="subtext text-left">
                Click on{" "}
                <span className="text-black">
                  Setting <ArrowIcon /> Networks <ArrowIcon /> Add Network
                </span>
              </div>
            </div>

            <div className="col-6">
            <div className="dashline">
                <div className="circle start"/>
                <div className="circle end" />
              </div>
              <img src={TextImage} alt="text"/>
              <div className="step-title">Step 2</div>
              <div className="subtitle">Fill in TextFields</div>
              <div className="subtext text-left">
                Fill in the parameters for the 
                <span className="text-black"> Cronos Mainnet Network</span>
              </div>
              <div className="subtext text-left" style={{marginTop: "20px"}}>
                <div className="text-field">
                  <span className="text-black">Name: </span>
                  Cronos Chain
                </div>
                <div className="text-field">
                  <span className="text-black">New RPC URL: </span>
                  https://rpc.artemisone.org/cronos
                </div>
                <div className="text-field">
                  <span className="text-black">Chain-ID: </span>
                  25
                </div>
                <div className="text-field">
                  <span className="text-black">Symbol: </span>
                  CRO
                </div>
                <div className="text-field">
                  <span className="text-black">Block Explorer URL: </span>
                  https://cronoscan.org
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaMaskComponent;
