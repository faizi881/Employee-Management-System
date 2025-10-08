function Header() {
  return (
   <div className="flex items-end justify-between">
    <h1 className="text-2xl font-medium text-white">Hello<br /><span className="text-3xl font-semibold text-white">Faizan👋</span></h1>
    <button className="text-white bg-red-600 px-4 py-2 rounded">Logout</button>
   </div>
  );
}
export default Header;