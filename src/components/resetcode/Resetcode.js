import { Fragment } from "react";
import "./Resetcode.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';


function Resetcode() {
  return (
    <Fragment>
      <img src={logo_blue} alt="To do app Logo" className="logo" />
      <div className="formWrapper">
        <div className="form">
          <div className="formItem">
            <input type="text" id="code" className="inputItem"/>
            <label for="code" className="lableItem">
              Enter Reset Code
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
export default Resetcode;