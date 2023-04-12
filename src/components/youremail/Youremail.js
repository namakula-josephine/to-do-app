import { Fragment } from "react";
import "./Youremail.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';

function Youremail() {
  return (
    <Fragment>
      <img src={logo_blue} alt="To do app Logo" className="logo" />
      <div className="formWrapper">
        <div className="form">
          <div className="formItem">
            <input type="text" id="email" className="inputItem"/>
            <label for="email" className="lableItem">
              Your Email
            </label>
          </div>
          <div className="formItem">
            <input type="password" id="password" className="inputItem" />
            <label for="password" className="lableItem">
              Password
            </label>
          </div>
          <button className="formButton">
            <span className="btnText">Login</span>
            <ArrowForwardIcon />
          </button>
          <div className="formLinks">
            <button className="backLink">Back</button>
            <button className="passwordLink">Forgot Password?</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Youremail;