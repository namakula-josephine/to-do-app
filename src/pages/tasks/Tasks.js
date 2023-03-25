import Centerbar from "../../components/centerbar/Centerbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./Tasks.css"

export default function Tasks() {
  return (
    <>
      <Topbar />
      <div className="tasksContainer">
        <Leftbar />
        <Centerbar />
        <Rightbar />
      </div>
    </>
  );
}
