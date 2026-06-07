import { useState } from "react";
import "./App.css";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import LiveText from "./LiveText";
import AllProduct from "./AllProduct";
import Count from "./Count";
import Todo from "./Todo";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

function App() {
// const [Dashboard, setDashboard]= useState("Dashboard");
  return(

  <>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Count />} />
        <Route path="/live" element={<LiveText />} />
        <Route path="/todo" element={<Todo />} />
        <Route path ="/products" element={<AllProduct/>}/>


</Routes>
<Footer/>
     </>
  
  );
}

export default App;
