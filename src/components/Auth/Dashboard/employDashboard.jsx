import Header from "./other/header";
import TaskListNum from "./other/tasklistnum";
import TaskList from "../Task/tasklist";

function EmployeeDashboard({ data }) {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen text-white">
      <Header data={data} />
      <h1 className="text-xl font-semibold mb-4">Employee ID: {data?.id}</h1>
      <TaskListNum data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
