import React from 'react'

//Components
import NavBar from '../components/Navbar/NavBar'
import Tag from '../components/Tag';
import Status from '../components/Achievemts/status';
import UGStudents from '../components/Achievemts/ugStudents';
import PG from '../components/PG/pg';
import FacultyAch from '../components/Achievemts/facultyAch';
import Footer from '../components/footer';


const Achievements = () => {
  return (
    <>  
        <NavBar />
        <div className="bg-purple-100relative top-20">
            <div className='lg:w-full h-32 lg:-mb-1.5'></div>
            {/* <div className="md:ml-10 w-2/5">
                <Tag eventName={"Achievements"} />
            </div> */}
            <Status />
            <UGStudents />
            <PG />
            <FacultyAch />
            <Footer />
        </div>  
    </>
  )
}

export default Achievements