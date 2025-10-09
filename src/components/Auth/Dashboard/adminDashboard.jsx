import AllTasks from "./other/alltask";
import CreateTask from "./other/createtask";
import Header from "./other/header";

function AdminDashboard() {
  return (
    <>
      <div className="min-h-screen w-full bg-black text-gray-100 p-6">
        <Header />
        <CreateTask />
        <AllTasks />
      </div>
    </>
  );
}

export default AdminDashboard;
