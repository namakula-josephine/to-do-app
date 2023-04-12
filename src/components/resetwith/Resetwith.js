import { Fragment } from "react";
import "./Resetwith.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';


function Resetwith() {
  return (
    <Fragment>
      <img src={logo_blue} alt="To do app Logo" className="logo" />
      <div className="formWrapper">
        <div className="form">
          <div className="formItem">
            <input type="text" id="code" className="inputItem"/>
            <label for="code" className="lableItem">
              Enter Email/Phone Number
            </label>
          </div>
          <button className="formButton">
            <span className="btnText">Reset Password</span>
            <ArrowForwardIcon />
          </button>
          <div className="formLinks">
            <button className="backLink">Back</button>
            <button className="createAccountLink">Create Account</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Resetwith;