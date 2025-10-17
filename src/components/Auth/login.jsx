import { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("Email is :", email);
    console.log("Password is :", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl"></div>
      <div className="relative border border-gray-700 rounded-2xl bg-[#12161a] shadow-xl shadow-emerald-900/10">
        <form
          className="p-8 w-[380px]"
          onSubmit={submitHandler}
        >
          <h2 className="text-white text-2xl mb-6 text-center">Login</h2>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-700 rounded-xl bg-[#0b0f14] text-white focus:outline-none focus:border-emerald-500/70"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border border-gray-700 rounded-xl bg-[#0b0f14] text-white focus:outline-none focus:border-emerald-500/70"
          />

          <div className="flex justify-center">
            <button className="mt-2 text-white bg-gradient-to-r from-emerald-600 to-emerald-500 py-3 px-5 rounded-xl hover:from-emerald-500 hover:to-emerald-400 cursor-pointer border border-emerald-400/30">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
