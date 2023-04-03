import "./topbar.css"
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/logo_white.png" alt="To do app Logo" className="logo"/>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <AddIcon data-testid="add-icon" />
                    <SettingsIcon data-testid="settings-icon" />
                </div>
<<<<<<< HEAD
                <img src="/assets/pofile_pic.jpg" alt="To do app user" className="profileImage"/>
=======
                <img src="/assets/profile_image.jpg" alt="to do app user" className="profileImage"/>
>>>>>>> 72cf8747c2ea22c42831449178f74934c1de26f8
            </div>
        </div>
    )
}