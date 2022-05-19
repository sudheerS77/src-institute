import React from 'react'
import { useParams } from "react-router-dom";

//Pages
import Event from './Event';
import GalleryPage from './Gallery';
import Home from './Home';
import Achievements from './Achievements';
import Projects from './Projects';
import LoginPage from './Login.page';
import RegisterPage from './Register.page';
import AdminHomePage from './Admin/admin.home';

const Master = () => {
  let { type }= useParams();
  console.log(type);
    return (
    <div>
      { type === "home" && <Home /> }
      { type === "events" && <Event /> }
      { type === "gallery" && <GalleryPage /> }
      { type === "achivements" && <Achievements /> }
      { type === "projects" && <Projects /> }
      { type === "login" && <LoginPage /> }
      { type === "register" && <RegisterPage /> }
    </div>
  );
};

export default Master;