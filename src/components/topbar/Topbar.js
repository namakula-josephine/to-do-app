import "./topbar.css"
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/logo_white.png" alt="" className="logo"/>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <AddIcon />
                    <SettingsIcon />
                </div>
                <img src="/assets/profile_image.jpg" alt="" className="profileImage"/>
            </div>
        </div>
    )
}