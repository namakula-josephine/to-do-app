import "./Leftbar.css";
import HomeIcon from '@mui/icons-material/Home';

function Leftbar() {
  return (
    <div className="leftBar">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem">
            <HomeIcon className=""/>
            <span className="leftBarListItemText">All Tasks</span>
            <span className="leftBarListItemCounter">9</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
