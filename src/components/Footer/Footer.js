import { NavLink } from "react-router-dom";
import { ArrowupIcon, CronosIcon, DiscordIcon, FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "../../icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="row">
        <div className="col-4">
          <div className="link">
            <div>
              <NavLink to="#">About</NavLink>
            </div>
            <div>
              <NavLink to="#">Strategy</NavLink>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="link">
            <div>
              <NavLink to="#">Rewards & Taxes</NavLink>
            </div>
            <div>
              <NavLink to="#">RoadMap</NavLink>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="link">
            <div className="subtitle text-black">CONTACT</div>
            <div>EmailHere@email.com</div>
          </div>
        </div>
      </div>
      

    </div>

    <div className="bottom-container">
        <div className="text">Copyright © 2022 Eternity Earn, All rights Reserved</div>
        <div className="linklist">
          <NavLink to="#"><CronosIcon/></NavLink>
          <NavLink to="#"><TelegramIcon/></NavLink>
          <NavLink to="#"><TwitterIcon/></NavLink>
          <NavLink to="#"><DiscordIcon/></NavLink>
          <NavLink to="#"><ArrowupIcon/></NavLink>
          <NavLink to="#"><FacebookIcon/></NavLink>
          <NavLink to="#"><InstagramIcon/></NavLink>
        </div>
      </div>
    </>
    
  );
};

export default Footer;
