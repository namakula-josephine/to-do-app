import "./login.css";
//import Welcomepage from "../../components/welcomepage/Welcomepage.js";
//import Signuppage from "../../components/signuppage/Signuppage";
import sliderImage from '../../assets/slider1.png';
//import Youremail from "../../components/youremail/Youremail";
//import Yourphone from "../../components/yourphone/Yourphone";
//import Newpassword from "../../components/newpassword/Newpassword";
//import Resetcode from "../../components/resetcode/Resetcode";
import Resetwith from "../../components/resetwith/Resetwith";
//import Resetcode from "../../components/resetcode/Resetcode";


export default function Login(){
    return (
        <div className="loginContainer">
            <div className="loginLeft">
                {/* <Welcomepage />  */}
                  {/* <Signuppage />   */}
                 {/* <Newpassword />  */}
                 {/* <Youremail />   */}
                 {/* <Resetcode />  */}
                  {/* <Yourphone />  */}
                  <Resetwith />  
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



