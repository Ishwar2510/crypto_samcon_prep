import React, { useState } from "react";
import Header from "./components/Header";
import Pages from "./pages/Pages";
import { createContext } from "react";

export const userContext = createContext();
function App() {
  const [centraldata, setCentralData] = useState([]);
  return (
    <>
      <userContext.Provider value={{ centraldata, setCentralData }}>
        <Header />
        <Pages />
      </userContext.Provider>
    </>
  );
}

export default App;
