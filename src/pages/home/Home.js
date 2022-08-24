import React from "react";
import { Feed, Rightbar, Sidebar, Topbar } from "../../components";
import "./home.css";

const Home = () => {
  console.log(process.env.REACT_APP_VIETNAM);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
