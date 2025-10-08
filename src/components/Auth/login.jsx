import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is :", email);
    console.log("Password is :", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="border-2 rounded-lg  border-emerald-500">
        <form
          className="bg-gray-800 p-8 border-emerald-500 rounded shadow-md w-96"
          onSubmit={submitHandler}
        >
          <h2 className="text-white text-2xl mb-6 text-center">Login</h2>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-emerald-700 rounded-xl bg-gray-700 text-white"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-emerald-700 rounded-xl bg-gray-700 text-white"
          />

          <div className="flex justify-center">
            <button className="mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-xl hover:bg-emerald-700 cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
