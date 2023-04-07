import { Fragment } from "react";
import "./Welcomepage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo_blue from '../../assets/logo_blue.png';



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
            <ArrowForwardIcon />
        </button>
        <button className="formButton">
          <span className="btnText">Signup</span>
            <ArrowForwardIcon />  
        </button>
        
      </div>
      </div>
    </Fragment>
  );
}
  export default Welcomepage;