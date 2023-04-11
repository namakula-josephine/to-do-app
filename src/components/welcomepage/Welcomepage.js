import { Fragment } from "react";
import "./Welcomepage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';
//import Lock from "@mui/icons-material/Lock";



function Welcomepage() {
  return (
    <Fragment>
      <img src={logo_blue} alt="To do app Logo" className="logo" />
      <div className="formWrapper">
  
        <div className="form">
        <h1 className="Login-heading">
             welcome to yourToDo
          </h1>
        <button className="formButton">
        <span className="btnText">Login</span>
            {/* <Lock /> */}
            <ArrowForwardIcon />
        </button>
        <button className="formButton">
          <span className="btnText">Signup</span>
            <ArrowForwardIcon />  
        </button>
        <div className="formLinks">
            <button className="passwordLink">Forgot Password?</button>
        </div>
      </div>
      </div>
    </Fragment>
  );
}
  export default Welcomepage;