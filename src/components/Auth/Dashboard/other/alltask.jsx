import { useEffect, useState } from "react";

function AllTasks() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const load = () => {
      const data = JSON.parse(localStorage.getItem("employees")) || [];
      setEmployees(Array.isArray(data) ? data : []);
    };
    load();
    const handler = () => load();
    window.addEventListener("employeesUpdated", handler);
    return () => window.removeEventListener("employeesUpdated", handler);
  }, []);

  return (
    <>
      <div className="p-5 bg-[#12161a] mt-5 max-h-80 overflow-auto rounded-2xl border border-gray-700 shadow-sm">
        <div className="grid grid-cols-5 gap-4 text-sm text-gray-300 font-semibold px-2 pb-2 border-b border-gray-700 mb-3">
          <div>Employee</div>
          <div>New</div>
          <div>Active</div>
          <div>Completed</div>
          <div>Failed</div>
        </div>

        {employees.map((emp) => (
          <div key={emp.id} className="grid grid-cols-5 gap-4 items-center text-white px-2 py-2 rounded hover:bg-[#0f1317]">
            <div className="font-semibold text-gray-200">{emp.firstName}</div>
            <div className="text-blue-300/90">{emp?.taskCount?.newTask ?? 0}</div>
            <div className="text-pink-300/90">{emp?.taskCount?.active ?? 0}</div>
            <div className="text-emerald-300/90">{emp?.taskCount?.completed ?? 0}</div>
            <div className="text-yellow-300/90">{emp?.taskCount?.failed ?? 0}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default AllTasks;