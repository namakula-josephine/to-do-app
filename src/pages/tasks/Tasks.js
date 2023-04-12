import Centerbar from "../../components/centerbar/Centerbar";
import Menubar from "../../components/menubar/Menubar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./tasks.css"

export default function Tasks() {
  return (
    <>
      <Topbar />
      <div className="tasksContainer">
         <Menubar /> 
         <Centerbar /> 
        <Rightbar />
      </div>
    </>
  );
}
