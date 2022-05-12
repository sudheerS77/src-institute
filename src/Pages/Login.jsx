import React from 'react'
import { useParams } from 'react-router-dom'

//Components
import NavBar from '../components/Navbar/NavBar'
import FacultyLogin from "../components/Authentication/facultyLogin";
import AdminLogin from "../components/Authentication/AdminLogin";
import StudentsLogin from '../components/Authentication/studentsLogin';
const Login = () => {
  const { type } = useParams();
  return (
    <>
      <NavBar />
      <div className="relative top-40">
        <StudentsLogin />
      </div>
      { type === "/facultylogin" && <FacultyLogin /> }
      { type === "/adminlogin" && <AdminLogin /> }
    </>
  )
}

export default Login