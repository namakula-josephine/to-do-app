import "./login.css";
import Welcomepage from "../../components/welcomepage/Welcomepage.js";
//import Signuppage from "../../components/signuppage/signuppage";
import sliderImage from '../../assets/slider1.png';
//import Withemail from "../../components/withemail/Withemail";
//import Withphone from "../../components/withphone/Withphone";
//import Emailophone from "../../components/emailophone/Emailophone";


export default function Login(){
    return (
        <div className="loginContainer">
            <div className="loginLeft">
                <Welcomepage />  
                 {/* <Signuppage />  */}
                 {/* <Withphone /> */}
                 {/* <Emailophone /> */}
            </div>
            <div className="loginRight">
                <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={sliderImage} alt="slider" width ='500' height='300'></img>
                <br />
                <div className="definition">
                <h3>Your remainder here</h3>
                <p>Lorem Ipsum has been the dummy</p>
                </div>
                </div>
            </div>
        </div>
    );

}



