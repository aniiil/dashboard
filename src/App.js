import React from "react";
import { Routes, Route } from "react-router-dom";
import Custm from "./Component/Customer/Custm";
import Nav from "./Component/Navbar/Nav";
import Dash from "./Component/Dashboard/Dash";
import Ct from "./Component/Chat/ct";
import Side from "./Component/Sidebar/Side";
import Log from "./Component/Logout/Log";
import Foot from "./Component/Footer/Foot";

function App() {
  return (
    <>
     <Nav/>
     <Side>
      
     <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/dashboard" element={<Dash />} />
          <Route path="/customer" element={<Custm/>} />
          <Route path="/chat" element={<Ct/>} />
          <Route path="/logout" element={<Log/>}/>
        </Routes>
     </Side>
     <Foot/>
    </>
  );
}

export default App;
