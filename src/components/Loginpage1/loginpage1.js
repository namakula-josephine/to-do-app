import { Fragment } from "react";
import "./loginpage1.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';
import Lock from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";


function Loginpage1() {
  return (
    <Fragment>
      <img src={logo_blue} alt="To do app Logo" className="logo" />
      <div className="formWrapper">
        <div className="form">
          <h1 className="Login-heading">
            <Lock /> Login
          </h1>
        <button className="formButton">
            <EmailIcon />
            with Email
            <ArrowForwardIcon />
        </button>
        <button className="formButton">
            <CallIcon />
            with Phone Number
            <ArrowForwardIcon />
        </button>
        <div className="formLinks">
            <button className="ForgotPasswordLink">Forgot Password?</button>
            <button className="CreateAccountLink">Create Account</button>
        </div>
        </div>
      </div>
    </Fragment>
  );
}
  export default Loginpage1;