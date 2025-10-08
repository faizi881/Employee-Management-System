import Header from "./other/header";
import TaskListNum from "./other/tasklistnum";
import TaskList from "../Task/tasklist";
function EmployeeDashboard() {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskListNum />
      <TaskList />
    </div>
  );
}
export default EmployeeDashboard;
