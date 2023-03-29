import "./AddTask.css";
import AddIcon from '@mui/icons-material/Add';

export default function AddTask() {
  return (
    <div className="addTask">
      <div className="addTaskTitle">
        <AddIcon className="addTaskTitleIcon"/>
        <span className="addTaskTitleText">Add New Task</span>
      </div>
      <div className="addTaskForm">
        <div className="addTaskFormTitle">Form Title</div>
        <div className="addTaskFormDescription">Form Description</div>
        <div className="addTaskFormSchedule">Form Description</div>
      </div>
      <button className="addTaskButton">Button</button>
    </div>
  );
}
