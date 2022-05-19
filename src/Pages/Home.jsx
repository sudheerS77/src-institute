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
    <>        
      <NavBar />
      <div className="bg-indigo-50 relative top-20">        
        <div className="border-red-900">
          <HeroCarousals />
        </div>
        <AboutDep />
        <Faculty />
        <VisitingFaculty />
        <PG />
      </div>
      <Footer />
    </>
  )
}

export default Home