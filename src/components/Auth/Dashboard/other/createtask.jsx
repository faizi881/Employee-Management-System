import { useEffect, useMemo, useState } from "react";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assigneeId, setAssigneeId] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(Array.isArray(data) ? data : []);
  }, []);

  const canSubmit = useMemo(() => {
    return title && date && assigneeId && category && description;
  }, [title, date, assigneeId, category, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    const nextEmployees = employees.map((emp) => {
      if (String(emp.id) !== String(assigneeId)) return emp;
      const newTask = {
        title,
        description,
        date,
        category,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      };
      const updatedTasks = [newTask, ...(emp.tasks || [])];
      const updatedCounts = {
        active: emp.taskCount?.active ?? 0,
        newTask: (emp.taskCount?.newTask ?? 0) + 1,
        completed: emp.taskCount?.completed ?? 0,
        failed: emp.taskCount?.failed ?? 0,
      };
      return { ...emp, tasks: updatedTasks, taskCount: updatedCounts };
    });

    localStorage.setItem("employees", JSON.stringify(nextEmployees));
    setEmployees(nextEmployees);
    window.dispatchEvent(new CustomEvent("employeesUpdated"));

    setTitle("");
    setDate("");
    setAssigneeId("");
    setCategory("");
    setDescription("");
    alert("Task created and assigned.");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-6 bg-[#12161a] border border-gray-700 rounded-2xl shadow-xl shadow-emerald-900/10 p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-200">
          Create New Task
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="col-span-1 flex flex-col gap-4">
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Task Title</h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Make a UI design"
                className="w-full px-3 py-2 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-100 
                       focus:outline-none focus:border-emerald-500/70 text-sm"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Date</h3>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-100 
                       focus:outline-none focus:border-emerald-500/70 text-sm"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Assign To</h3>
              <select
                value={assigneeId}
                onChange={(e) => setAssigneeId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-100 
                       focus:outline-none focus:border-emerald-500/70 text-sm"
              >
                <option value="">Select Employee</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.firstName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Category</h3>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Design, Development, Testing"
                className="w-full px-3 py-2 rounded-lg bg-[#0b0f14] border border-gray-700 text-gray-100 
                       focus:outline-none focus:border-emerald-500/70 text-sm"
              />
            </div>
            <button
              disabled={!canSubmit}
              type="submit"
              className="mt-1 bg-gradient-to-r from-emerald-600 to-emerald-500 disabled:opacity-50 hover:from-emerald-500 hover:to-emerald-400 transition-colors text-white py-2 
                     rounded-xl font-medium shadow-lg shadow-emerald-900/20 border border-emerald-400/30 text-sm"
            >
              Create Task
            </button>
          </div>
          <div className="col-span-1">
            <h3 className="text-gray-300 mb-1 text-sm">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the task"
              className="w-full h-[280px] px-3 py-2 rounded-lg bg-[#0b0f14] border border-gray-700   
                     text-gray-100 focus:outline-none focus:border-emerald-500/70 resize-none text-sm"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateTask;
