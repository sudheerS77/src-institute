import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useParams, useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import logo from "../assets/logo.png";

//Redux action
import { signOut } from "../../Redux/Reducer/Auth/auth.action";


const SmNavBar = () => {
  const { type } = useParams();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [user, setUser] = useState();

 
  const dispatch = useDispatch();
  const reduxState = useSelector((globalStore) => globalStore.user.user);

  useEffect(() => {
  reduxState?.user && setUser(reduxState?.user);
 }, [reduxState]);

 const signOutHandler = () => dispatch(signOut());

  const [ isDropDownOpen, setIsDropDownOpen ] =  useState(false);
  return (
    <div className="w-full">
      <div className="fixed md:hidden z-10 w-full h-14 bg-gray-50 shadow-xl border-b flex flex-row items-center justify-between px-4">
        <div className="w-52 h-full border border-gray-100 my-1">
          <img src={logo} alt="Logo" className="w-full h-full"/>
        </div>        
        <div className="w-6 h-6 "
          onClick={() => setIsDropDownOpen((prev) => !prev) }
        >
            <GiHamburgerMenu className="w-full h-full"/>
        </div>
        {
          isDropDownOpen && (            
            <div className="bg-gray-50 absolute right-0 top-14 w-full">
              <ul className="flex flex-col items-center justify-between gap-4 block px-4 py-2 hover:bg-gray-100 font-bold">
                <li className={ type==="home" && ('bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150')}>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li><a href="https://oralpath.sriher.com/resources/assets/brochure/MASTERMINDSERIES02March03.pdf" target={"_blank"}>Broucher</a></li>
                <li className={ type==="events" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/events"}>Events</Link>
                </li>
                <li className={ type==="achivements" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/achivements"}>Achivements</Link>
                </li>
                
                <li className={ (type==="faculty" || type==="visitingfaculty" || type==="pg") ? 'bg-gray-50 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150 w-full font-bold': "bg-gray-50 w-full font-bold"}>                
                  <select value={value} onClick={() => value !=="" && navigate(`/${value}`)} onChange={handleChange} className={ (type==="faculty" || type==="visitingfaculty" || type==="pg") ? "bg-gray-500 w-full text-center" : "h-full w-full bg-gray-50 text-center border-none"}>
                    <option value="" selected disabled hidden>Teaching Faculty</option>
                    <option value="faculty" className="block px-4 py-2 hover:bg-gray-100">
                      <Link to="/faculty">Faculty</Link>
                    </option>
                    <option value="visitingfaculty" className="block px-4 py-2 hover:bg-gray-100">
                      <button>
                        Visiting Faculty
                      </button>
                    </option>
                    <option value="pg" className="block px-4 py-2 hover:bg-gray-100">Pg</option>
                  </select>
                </li>
                <li className={ type==="gallery" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/gallery"}>Gallery</Link>
                </li>
                <li className={ type==="projects" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                  <Link to={"/projects"}>Projects</Link>
                </li> 
                {reduxState?.user ? (
                  <div>
                    <li className={ type==="login" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                      <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li className={ type==="register" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                      <button 
                        className="py-1 font-bold"
                        onClick={signOutHandler} >
                        Logout
                      </button>
                    </li>   
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <li className={ type==="login" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li className={ type==="register" && 'bg-gray-600 text-center w-full border border-grey-50 shadow-xl py-1 px-2 rounded-sm text-blue-50 transition duration-700 ease-in-out delay-150'}>
                      <Link to={"/register"}>Register</Link>
                    </li>                    
                  </div>
                ) }
            </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SmNavBar;


