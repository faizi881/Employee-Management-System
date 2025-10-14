function Failed() {
  return (
    <>
      <div className="h-full flex-shrink-0 w-[300px] rounded-xl bg-yellow-400 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">24 Oct 2025</h4>
        </div>

        <h2 className="text-2xl font-semibold my-3">Meeting with Clients</h2>

        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
        </p>

        <div className="flex justify-between mt-4">
          <button className="bg-red-600 hover:bg-green-700 text-white px-2 py-1  text-sm">
            Failed
          </button>
        </div>
      </div>
    </>
  );
}
export default Failed;
