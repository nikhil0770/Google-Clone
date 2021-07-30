import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      {/* <h3>This the Home Page</h3> */}
      <div className="home_header">
        <div className="header_left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header_right">
          <a href="https://www.gmail.com" target="blank">
            Gmail
          </a>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-LTSsS-MnlwfdOxgmj2zBCRhkFUbKgWVwiP5QqGA=s32-c-mo" />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt=""
        />
        <div className="searchbar">
          <Search hidebuttons />
        </div>
      </div>
    </div>
  );
}

export default Home;
