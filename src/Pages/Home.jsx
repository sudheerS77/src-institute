import React from 'react'

//components
//import NavBar from "../components/Navbar/NavBar";
import HeroCarousals from '../components/Carousals/HeroCarousals';
import AboutDep from '../components/aboutDep';
import Faculty from '../components/Faculty/faculty';
import VisitingFaculty from '../components/Faculty/visitingFaculty';
import PG from '../components/PG/pg';
import Footer from '../components/footer';
import NavBar from '../components/Navbar/NavBar';

const Home = () => {
  return (
    <div>        
      <NavBar />
      <div className="bg-indigo-50">
        <div className='w-full h-32 -mb-1.5'></div>
        <HeroCarousals />
        <AboutDep />
        <Faculty />
        <VisitingFaculty />
        <PG />
      </div>
      <Footer />
    </div>
  )
}

export default Home