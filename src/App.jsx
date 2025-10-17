import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Auth/Dashboard/employDashboard";
import AdminDashboard from "./components/Auth/Dashboard/adminDashboard";
import "./App.css";
import { useContext, useEffect, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "./utils/localStroge";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setuser] = useState(null);
  const authdata = useContext(AuthContext);
  const [LoggedUserData, setLoggedUserData] = useState(null);
  // useEffect(() => {
  //   if (authdata) {
  //     const loggedInUser = localStorage.getItem("Logged User");
  //     if (loggedInUser) {
  //       setuser(loggedInUser.role);
  //     }
  //   }
  // }, [authdata]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setuser({ role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else {
      // Always use latest employees from localStorage for employee login
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setuser({ role: "employee" });
        setLoggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", employeeId: employee.id })
        );
      } else {
        alert("Invalid Candidate");
      }
    }
  };

  // Restore session on refresh
  useEffect(() => {
    const saved = localStorage.getItem("loggedInUser");
    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      if (parsed?.role === "admin") {
        setuser({ role: "admin" });
      } else if (parsed?.role === "employee" && parsed?.employeeId) {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const employee = employees.find((e) => e.id === parsed.employeeId);
        if (employee) {
          setuser({ role: "employee" });
          setLoggedUserData(employee);
        }
      }
    } catch {}
  }, []);

  const handleLogout = () => {
    setuser(null);
    setLoggedUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage();
  // });

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard onLogout={handleLogout} />
      ) : user.role === "employee" ? (
        <EmployeeDashboard data={LoggedUserData} onLogout={handleLogout} />
      ) : null}
    </>
  );
}

export default App;
