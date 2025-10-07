function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-black-900">
      <div className="border-2 rounded-lg p-6 border-emerald-500">
        <form className="bg-gray-800 p-8 border-emerald-500 rounded shadow-md w-96">
          <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
          <input
  type="email"
  placeholder="Email"
  className="w-full p-2 mb-4 border border-emerald-700 rounded-xl bg-gray-700 text-white"
/>

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-emerald-700 rounded-xl bg-gray-700 text-white"
          />
        <div className="flex justify-center">
  <button className="flex items-center justify-center px-6 py-2 bg-emerald-600 rounded-xl hover:bg-emerald-700 text-white font-semibold border border-emerald-700">
    Login
  </button>
</div>

        </form>
      </div>

    </div>
  );
}
export default Login;
