function Failed({ items = [] }) {
  return (
    <>
      {items.map(({ task, index }) => (
        <div
          key={index}
          className="h-full flex-shrink-0 w-[340px] rounded-2xl bg-[#111827] border border-gray-700 p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:ring-1 hover:ring-yellow-400/30"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-wide text-gray-300 bg-yellow-500/20 border border-yellow-500/30 px-2 py-0.5 rounded-md">
              {task.category || "General"}
            </span>
            <h4 className="text-xs text-gray-400">{task.date}</h4>
          </div>
          <h2 className="text-xl font-semibold my-3 text-white">
            {task.title}
          </h2>
          <p className="text-sm mt-2 text-gray-300">{task.description}</p>
          <div className="flex justify-between mt-4">
            <button className="bg-yellow-600 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-lg text-sm shadow border border-yellow-400/30">
              Failed
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Failed;
