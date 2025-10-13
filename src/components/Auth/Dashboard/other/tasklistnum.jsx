function TaskListNum() {
  return (
    <>
    <div className="flex justify-between mt-10 gap-5 screen">
      <div className="rounded-xl px-9 py-6  bg-red-400 w-[45%]">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
    <div className="rounded-xl px-9 py-6  bg-green-400 w-[45%]">
        <h2 className="text-3xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">Complete Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6  bg-blue-400 w-[45%]">
        <h2 className="text-3xl font-semibold">6</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl px-9 py-6  bg-yellow-400 w-[45%]">
        <h2 className="text-3xl font-semibold">2</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
    </>
  );
}
export default TaskListNum;
