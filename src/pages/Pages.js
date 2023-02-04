import React from "react";
import { Routes, Route } from "react-router";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Main from "../components/Main";
import Details from "../components/Details";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/main" element={<Main />}></Route>
      <Route path="/details/:id" element={<Details />}></Route>
    </Routes>
  );
}

export default Pages;
