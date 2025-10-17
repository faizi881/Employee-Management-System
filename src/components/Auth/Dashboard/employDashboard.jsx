import { useEffect, useState } from "react";
import Header from "./other/header";
import TaskListNum from "./other/tasklistnum";
import TaskList from "../Task/tasklist";

function EmployeeDashboard({ data, onLogout }) {
  const [emp, setEmp] = useState(data);

  useEffect(() => {
    setEmp(data);
  }, [data]);

  useEffect(() => {
    const refresh = () => {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const updated = employees.find((e) => e.id === data?.id);
      if (updated) setEmp(updated);
    };
    window.addEventListener("employeesUpdated", refresh);
    return () => window.removeEventListener("employeesUpdated", refresh);
  }, [data?.id]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl"></div>
      <div className="relative p-10 max-w-6xl mx-auto">
        <Header data={emp} onLogout={onLogout} />
        <div className="mt-3 mb-4 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#12161a] px-4 py-1.5 text-sm text-gray-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Employee ID: {emp?.id}
        </div>
        {emp && <TaskListNum data={emp} />} 
        {emp && <TaskList data={emp} />}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
