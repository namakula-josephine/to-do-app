import AddTask from "../addtask/AddTask";
import "./Centerbar.css";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Centerbar() {
  return <div className="centerBar">
      <HomeIcon className="menuBarIconn"/>
      <span className="menuBarListItemTextt">All Tasks</span>
      <div className="Addatasks" >
        <button className="AddAtasks" >Add A Task.</button>
      </div>
      <div className="Addtasks" >
        <button className="Addatask" >Programming C</button>
      </div>
      <div className="Addtasks" >
        <button className="Addatask">Programming Python</button>
        </div>
      <div className="Addtasks">
        <button className="Addatask">Reading Probability</button>
        </div>
  </div>;
}

export default Centerbar;
