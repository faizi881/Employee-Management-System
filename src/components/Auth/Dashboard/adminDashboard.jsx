import AllTasks from "./other/alltask";
import CreateTask from "./other/createtask";
import Header from "./other/header";

function AdminDashboard({ onLogout }) {
  return (
    <>
      <div className="relative min-h-screen text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl"></div>
        <div className="relative p-6 max-w-6xl mx-auto w-full">
          <Header data={{ firstName: "Admin" }} onLogout={onLogout} />
          <CreateTask />
          <AllTasks />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
