import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Auth/Dashboard/employDashboard";
import AdminDashboard from "./components/Auth/Dashboard/adminDashboard";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStroge";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setuser] = useState(null);
   const authdata = useContext(AuthContext)
   useEffect(()=>{
  if(authdata){ 
    const loggedInUser = localStorage.getItem("Logged User")
  if(loggedInUser){
    setuser(loggedInUser.role)
  }
 }
  
   },[authdata]);
 
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setuser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    }else if(authdata.employees.find((e)=>email == e.email && e.password == password)){
   setuser("employee")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      
    }
     else {
      alert("invalid Canidate");
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
) : user === "admin" ? (
  <AdminDashboard />
) : (
  <EmployeeDashboard />
)}

     

    </>
  );
}

export default App;
