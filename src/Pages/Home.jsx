import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

//components
//import NavBar from "../components/Navbar/NavBar";
import HeroCarousals from '../components/Carousals/HeroCarousals';
import AboutDep from '../components/aboutDep';
import Footer from '../components/footer';
import NavBar from '../components/Navbar/NavBar';

//Redux actions

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch();
  }, []);

  return (
    <>        
      <NavBar />
      <div className="bg-indigo-50 relative top-20 pb-20">        
        <div className="border-red-900">
          <HeroCarousals />
        </div>
        <AboutDep />
        {/* <Faculty />
        <VisitingFaculty />
        <PG /> */}
      </div>
      <div className="pt-10">
        <Footer />
      </div>
    </>
  )
}

export default Home