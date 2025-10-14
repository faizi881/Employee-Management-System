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
    } else if (authdata) {
      const employee = authdata.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setuser({ role: "employee" });
        setLoggedUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      } else {
        alert("Invalid Candidate");
      }
    } else {
      alert("Invalid Candidate");
    }
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
        <AdminDashboard />
      ) : user.role === "employee" ? (
        <EmployeeDashboard data={LoggedUserData} />
      ) : null}
    </>
  );
}

export default App;
