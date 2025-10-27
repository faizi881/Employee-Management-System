import Accepted from "./accpetTask";
import Complete from "./completeTask";
import Failed from "./failedTask";
import NewTask from "./newTask";

function TaskList({ data }) {
  const employeeId = data?.id;
  const tasks = Array.isArray(data?.tasks) ? data.tasks : [];
  const acceptedItems = tasks
    .map((task, index) => ({ task, index }))
    .filter((x) => x.task.active);
  const newItems = tasks
    .map((task, index) => ({ task, index }))
    .filter((x) => x.task.newTask);
  const completedItems = tasks
    .map((task, index) => ({ task, index }))
    .filter((x) => x.task.completed);
  const failedItems = tasks
    .map((task, index) => ({ task, index }))
    .filter((x) => x.task.failed);

  const updateTaskStatus = (originalIndex, status) => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const empIdx = employees.findIndex((e) => e.id === employeeId);
    if (empIdx === -1) return;
    const emp = employees[empIdx];
    if (!Array.isArray(emp.tasks) || !emp.tasks[originalIndex]) return;

    // update flags
    emp.tasks[originalIndex] = {
      ...emp.tasks[originalIndex],
      active: status === "active",
      newTask: status === "new",
      completed: status === "completed",
      failed: status === "failed",
    };

    // recalc counts
    const counts = emp.tasks.reduce(
      (acc, t) => {
        if (t.active) acc.active += 1;
        if (t.newTask) acc.newTask += 1;
        if (t.completed) acc.completed += 1;
        if (t.failed) acc.failed += 1;
        return acc;
      },
      { active: 0, newTask: 0, completed: 0, failed: 0 }
    );
    employees[empIdx] = { ...emp, taskCount: counts };
    localStorage.setItem("employees", JSON.stringify(employees));
    window.dispatchEvent(new CustomEvent("employeesUpdated"));
  };

  const handleAccept = (index) => updateTaskStatus(index, "active");
  const handleMarkCompleted = (index) => updateTaskStatus(index, "completed");
  const handleMarkFailed = (index) => updateTaskStatus(index, "failed");
  return (
    <>
      <div
        id="task-list"
        className="h-[60%] overflow-x-auto flex items-center gap-6 flex-nowrap justify-start w-full p-6 mt-10"
      >
        <NewTask items={newItems} onAccept={handleAccept}></NewTask>
        <Accepted
          items={acceptedItems}
          onComplete={handleMarkCompleted}
          onFail={handleMarkFailed}
        ></Accepted>
        <Complete
          items={completedItems}
          onComplete={handleMarkCompleted}
          onFail={handleMarkFailed}
        ></Complete>
        <Failed items={failedItems}></Failed>
      </div>
    </>
  );
}
export default TaskList;
