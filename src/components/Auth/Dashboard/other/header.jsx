function Header({data, onLogout}) {
  return (
   <div className="flex items-end justify-between">
    <h1 className="text-2xl font-medium text-white">Hello<br /><span className="text-3xl font-semibold text-white">{data?.firstName}👋</span></h1>
    <button onClick={onLogout} className="text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 px-5 py-2 rounded-xl shadow-lg shadow-emerald-900/20 border border-emerald-400/30 transition-colors">
      Logout
    </button>
   </div>
  );
}
export default Header;