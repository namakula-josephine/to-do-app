import { Fragment } from "react";
import "./Loginpage1.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


function Loginpage1() {
    return (
      <Fragment>
        <img src="/assets/logo_blue.png" alt="To do app Logo" className="logo" />
        <h1 className="Login-heading">
            <Lock />
        </h1>
        <button className="login-button">
            with Email
            <ArrowForwardIcon />
        </button>
        <button className="login-button">
            with Phone Number
            <ArrowForwardIcon />
        </button>
        <div className="formLinks">
            <button className="ForgotPasswordLink">Forgot Password?</button>
            <button className="createAccountLink">create Account</button>
        </div>
        
      </Fragment>
    );
  }
  export default Loginpage1;