function Complete({ items = [], onComplete, onFail }) {
  return (
    <>
      {items.map(({ task, index }) => (
        <div key={index} className="h-full flex-shrink-0 w-[340px] rounded-2xl bg-[#111827] border border-gray-700 p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:ring-1 hover:ring-emerald-400/30">
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase tracking-wide text-gray-300 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-md">{task.category || "General"}</span>
            <h4 className="text-xs text-gray-400">{task.date}</h4>
          </div>
          <h2 className="text-xl font-semibold my-3 text-white">{task.title}</h2>
          <p className="text-sm mt-2 text-gray-300">{task.description}</p>
          <div className="flex justify-start gap-2 mt-5">
            <button onClick={() => onComplete?.(index)} className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-sm shadow border border-emerald-400/30">
              Mark as Completed
            </button>
            <button onClick={() => onFail?.(index)} className="bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-lg text-sm shadow border border-rose-400/30">
              Mark as Failed
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Complete;