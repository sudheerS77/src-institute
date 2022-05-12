import React from 'react'

//Components
import NavBar from "../components/Navbar/NavBar";
import ProjectComponent from "../components/Projects/project.conponent";
import Footer from "../components/footer";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="bg-indigo-50">
        <div className='w-full h-32 -mb-1.5'></div>
        <ProjectComponent />
      </div>
      <Footer />

    </>
  )
}

export default Projects