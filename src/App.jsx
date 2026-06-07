import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LiveText from "./LiveText";
import AllProduct from "./Products";
import Count from "./Count";
import Todo from "./Todo";

function App() {
  return(
      <Routes>
        <Route path="/" element={<Count />} />
        <Route path="/live" element={<LiveText />} />
        <Route path="/todo" element={<Todo />} />
        <Route path ="/products" element={<Products/>}/>
      </Routes>
  );
}

export default App;
