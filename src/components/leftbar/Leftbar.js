import "./Leftbar.css";
import HomeIcon from '@mui/icons-material/Home';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function Leftbar() {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <HomeIcon className="leftBarIcon"/>
            <span className="leftBarListItemText">All Tasks</span>
            <span className="leftBarListItemCounter">9</span>
          </li>
          <li className="leftBarListItem">
            <StarOutlineIcon className="leftBarIcon"/>
            <span className="leftBarListItemText">Important</span>
            <span className="leftBarListItemCounter">2</span>
          </li>
          <li className="leftBarListItem">
            <CalendarTodayIcon className="leftBarIcon"/>
            <span className="leftBarListItemText">Today</span>
            <span className="leftBarListItemCounter">4</span>
          </li>
          <li className="leftBarListItem">
            <CalendarMonthIcon className="leftBarIcon"/>
            <span className="leftBarListItemText">This Week</span>
            <span className="leftBarListItemCounter">5</span>
          </li>
          <li className="leftBarListItem">
            <CheckCircleIcon className="leftBarIcon"/>
            <span className="leftBarListItemText">Completed</span>
            <span className="leftBarListItemCounter">3</span>
          </li>
          <li className="leftBarListItem">
            <CancelIcon className="leftBarIcon"/>
            <span className="leftBarListItemText">Missed</span>
            <span className="leftBarListItemCounter">2</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
