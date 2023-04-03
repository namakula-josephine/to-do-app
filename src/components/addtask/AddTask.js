import "./AddTask.css";
import AddIcon from '@mui/icons-material/Add';

export default function AddTask() {
  return (
    <div className="addTask">
      <div className="addTaskTitle">
        <AddIcon className="addTaskTitleIcon"/>
        <span className="addTaskTitleText">Add New Task</span>
      </div>
    </div>
  );
}
