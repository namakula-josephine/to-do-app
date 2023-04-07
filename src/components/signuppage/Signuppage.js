import { Fragment } from "react";
import "./signuppage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';


function signuppage() {
  return (
    <Fragment>
      <img src={logo_blue} alt="To do app Logo" className="logo" />
      <div className="formWrapper">
        <div className="form">
          <div className="formItem">
            <input type="text" id="yourname" className="inputItem"/>
            <label for="yourname" className="lableItem">
              Your Name
            </label>
          </div>
          <div className="formItem">
            <input type="email/phone" id="email/phone" className="inputItem" />
            <label for="email/phone" className="lableItem">
              Email Address/Phone Number
            </label>
          </div>
          <div className="formItem">
            <input type="password" id="password" className="inputItem" />
            <label for="password" className="lableItem">
              Password
            </label>
          </div>
          <div className="formItem">
            <input type="confirmpassword" id="confirmpassword" className="inputItem" />
            <label for="confirmpasword"  className="lableItem">
              Confirm Password
            </label>
          </div>
          <button className="formButton">
            <span className="btnText">Login</span>
            <ArrowForwardIcon />
          </button>
          <div className="formLinks">
            <button className="backLink">Back</button>
            <button className="passwordLink">Already have an account? Login</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default signuppage;
 