import "./login.css";
//import Loginpage2 from "../../components/loginpage2/Loginpage2";
import sliderImage from '../../assets/slider1.png';
import Loginpage1 from "../../components/Loginpage1/loginpage1";

export default function Login(){
    return (
        <div className="loginContainer">
            <div className="loginLeft">
                <Loginpage1 />
            </div>
            <div className="loginRight">
            <img src={sliderImage} alt="slider" width ='500' height='300' style={{display: "block"}}></img>
            <div className="definition">
            <br></br>
            <h1>Welcome to our todo list app</h1>
                <p>Lorem ipsum dol</p>
                </div>
            </div>
        </div>
    )
}