import "./Menubar.css";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function Menubar() {
  return (
    <div className="menuBar">
      <div className="searchBar">
        <SearchIcon className="searchIcon" />
        <input placeholder="Search for tasks" className="searchInput" />
      </div>
      <ul className="menuBarList">
        <li className="menuBarListItem menuBarListActive">
          <HomeIcon className="menuBarIcon" />
          <span className="menuBarListItemText">All Tasks</span>
          <span className="menuBarListItemCounter">12</span>
        </li>
        <li className="menuBarListItem">
          <GradeIcon className="menuBarIcon" />
          <span className="menuBarListItemText">Important</span>
          <span className="menuBarListItemCounter">2</span>
        </li>
        <li className="menuBarListItem">
          <div className="todayCalendarIcon">
            <CalendarTodayIcon className="menuBarIcon" />
            <span className="todayCounter">25</span>
          </div>
          <span className="menuBarListItemText">Today</span>
          <span className="menuBarListItemCounter">4</span>
        </li>
        <li className="menuBarListItem">
          <CalendarMonthIcon className="menuBarIcon" />
          <span className="menuBarListItemText">This Week</span>
          <span className="menuBarListItemCounter">5</span>
        </li>
        <li className="menuBarListItem">
          <CheckCircleIcon className="menuBarIcon" />
          <span className="menuBarListItemText">Completed</span>
          <span className="menuBarListItemCounter">3</span>
        </li>
        <li className="menuBarListItem">
          <CancelIcon className="menuBarIcon" />
          <span className="menuBarListItemText">Missed</span>
          <span className="menuBarListItemCounter">2</span>
        </li>
      </ul>
      <div className="goals">
        <EmojiEventsIcon className="goalIcon" />
        <div className="goalTextButtonWrapper">
          <span className="goalText">
            Week's Goals
            <ExpandLessIcon className="goalLessIcon" />
          </span>
          <button className="goalsButton">Add</button>
        </div>
      </div>
      <ul className="goalsList">
        <li className="goalsListItem">
          <RadioButtonUncheckedIcon className="goalsListCheckIcon" />
          <span className="goalListItemText">Understanding Django</span>
        </li>
        <li className="goalsListItem">
          <RadioButtonUncheckedIcon className="goalsListCheckIcon" />
          <span className="goalListItemText">Understanding html & css</span>
        </li>
        <li className="goalsListItem">
          <RadioButtonUncheckedIcon className="goalsListCheckIcon" />
          <span className="goalListItemText">Start learning French</span>
        </li>
        <li className="goalsListItem">
          <RadioButtonUncheckedIcon className="goalsListCheckIcon" />
          <span className="goalListItemText">Writting a Blog article</span>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;
