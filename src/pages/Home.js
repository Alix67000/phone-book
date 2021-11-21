import React from "react";
import AddContact from "../components/AddContact";
import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <AddContact />
      <Sidebar />
    </div>
  );
};

export default Home;
