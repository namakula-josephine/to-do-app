import { Fragment } from "react";
import "./Loginpage6.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Loginpage6() {
  return (
    <Fragment>
      <img src="/assets/logo_blue.png" alt="To do app Logo" className="logo" />
      <div className="formWrapper">
        <div className="form">
          <div className="formItem">
            <input type="text" id="enter Email/Phone Number" className="inputItem"/>
            <label for="Enter Email/Phone Number" className="lableItem">
              Enter Email/Phone Number
            </label>
          </div>
          <button className="formButton">
            <span className="btnText">Reset Password</span>
            <ArrowForwardIcon />
          </button>
          <div className="formLinks">
            <button className="backLink">Back</button>
            <button className="passwordLink">Create Account</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Loginpage6;