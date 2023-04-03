import AddTask from "../addtask/AddTask";
import "./Centerbar.css";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Centerbar() {
<<<<<<< HEAD
  return <div className="centerBar">
      <HomeIcon className="menuBarIconn"/>
      <span className="menuBarListItemTextt">All Tasks</span>
    </div>;
=======
  return (
    <div className="centerBar">
      <AddTask />
    </div>
  );
>>>>>>> 72cf8747c2ea22c42831449178f74934c1de26f8
}

export default Centerbar;
