import AddTask from "../addtask/AddTask";
import "./Centerbar.css";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Centerbar() {
  return (
    <div className="centerBar">
      <AddTask />
    </div>
  );
}

export default Centerbar;
