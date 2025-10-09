function CreateTask() {
  return (
    <>
      <div className="max-w-4xl mx-auto mt-6 bg-[#1c1c1c] rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-300">
          Create New Task
        </h1>
        {/* 2-column grid: inputs on left, description on right */}
        <form className="grid grid-cols-2 gap-6">
          {/* LEFT SIDE — All Inputs */}
          <div className="col-span-1 flex flex-col gap-4">
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="w-full px-3 py-2 rounded-md bg-[#1c1c1c] border border-gray-600 text-gray-100 
                       focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Date</h3>
              <input
                type="date"
                className="w-full px-3 py-2 rounded-md bg-[#1c1c1c] border border-gray-600 text-gray-100 
                       focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Assign To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full px-3 py-2 rounded-md bg-[#1c1c1c] border border-gray-600 text-gray-100 
                       focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <h3 className="text-gray-300 mb-1 text-sm">Category</h3>
              <input
                type="text"
                placeholder="Design, Development, Testing"
                className="w-full px-3 py-2 rounded-md bg-[#1c1c1c] border border-gray-600 text-gray-100 
                       focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="mt-1 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white py-2 
                     rounded-md font-medium shadow-md text-sm"
            >
              Create Task
            </button>
          </div>

          {/* RIGHT SIDE — Description */}
          <div className="col-span-1">
            <h3 className="text-gray-300 mb-1 text-sm">Description</h3>
            <textarea
              placeholder="Describe the task"
              className="w-full h-[280px] px-3 py-2 rounded-md bg-[#1c1c1c] border border-gray-600   
                     text-gray-100 focus:outline-none focus:border-blue-500 resize-none text-sm"
            ></textarea>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreateTask;
