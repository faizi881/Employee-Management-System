function TaskListNum({data}) {
  return (
    <>
    <div className="grid grid-cols-4 gap-5 mt-10">
      <div className="rounded-2xl px-6 py-5 border border-gray-700 bg-[#12161a] transition-transform hover:-translate-y-0.5 hover:ring-1 hover:ring-blue-400/30">
        <h2 className="text-3xl font-semibold text-blue-300/90">{data.taskCount.newTask}</h2>
        <h3 className="text-sm font-medium text-gray-400">New Tasks</h3>
      </div>
      <div className="rounded-2xl px-6 py-5 border border-gray-700 bg-[#12161a] transition-transform hover:-translate-y-0.5 hover:ring-1 hover:ring-emerald-400/30">
        <h2 className="text-3xl font-semibold text-emerald-300/90">{data.taskCount.completed}</h2>
        <h3 className="text-sm font-medium text-gray-400">Completed</h3>
      </div>
      <div className="rounded-2xl px-6 py-5 border border-gray-700 bg-[#12161a] transition-transform hover:-translate-y-0.5 hover:ring-1 hover:ring-pink-400/30">
        <h2 className="text-3xl font-semibold text-pink-300/90">{data.taskCount.active}</h2>
        <h3 className="text-sm font-medium text-gray-400">Accepted</h3>
      </div>
      <div className="rounded-2xl px-6 py-5 border border-gray-700 bg-[#12161a] transition-transform hover:-translate-y-0.5 hover:ring-1 hover:ring-yellow-400/30">
        <h2 className="text-3xl font-semibold text-yellow-300/90">{data.taskCount.failed}</h2>
        <h3 className="text-sm font-medium text-gray-400">Failed</h3>
      </div>
    </div>
    </>
  );
}
export default TaskListNum;
