import "./Menubar.css";
import HomeIcon from '@mui/icons-material/Home';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function Menubar() {
  return (
    <div className="menuBar">
      <div className="menuBarWrapper">
        <ul className="menuBarList">
          <li className="menuBarListItem menuBarActive">
            <HomeIcon className="menuBarIcon"/>
            <span className="menuBarListItemText">All Tasks</span>
            <span className="menuBarListItemCounter">12</span>
          </li>
          <li className="menuBarListItem">
            <StarOutlineIcon className="menuBarIcon"/>
            <span className="menuBarListItemText">Important</span>
            <span className="menuBarListItemCounter">2</span>
          </li>
          <li className="menuBarListItem">
            <CalendarTodayIcon className="menuBarIcon"/>
            <span className="menuBarListItemText">Today</span>
            <span className="menuBarListItemCounter">4</span>
          </li>
          <li className="menuBarListItem">
            <CalendarMonthIcon className="menuBarIcon"/>
            <span className="menuBarListItemText">This Week</span>
            <span className="menuBarListItemCounter">5</span>
          </li>
          <li className="menuBarListItem">
            <CheckCircleIcon className="menuBarIcon"/>
            <span className="menuBarListItemText">Completed</span>
            <span className="menuBarListItemCounter">3</span>
          </li>
          <li className="menuBarListItem">
            <CancelIcon className="menuBarIcon"/>
            <span className="menuBarListItemText">Missed</span>
            <span className="menuBarListItemCounter">2</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
