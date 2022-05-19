import React from 'react'
import { Link } from "react-router-dom";
import { FaUser, FaUserTie, FaUserFriends } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { GiAchievement } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { RiGalleryFill, RiSlideshow3Fill } from "react-icons/ri";

const SideBar = () => {
  return (
      <>
        <div className="fixed w-64 h-screen border-r-2 border-gray-300">
            <div className="md:w-64 lg:w-full h-14 border border-gray-100 shadow-md border-2">
                <Link to="/admin">
                    <img src="https://oralpath.sriher.com//resources/assets/images/NewSRIHER-01_new1.png" alt="Logo" className="w-full h-full"/>
                </Link>
            </div>
            <hr />
            <div>
                <ul className="text-md font-semibold text-gray-600 flex flex-col items-start w-full pt-2">
                    <li className="px-4 py-3 w-full border-b border-gray-200">
                        <Link to="/admin/users" className="flex items-center justify-start gap-4 w-full">
                            <FaUser className="w-6 h-6 text-blue-900"/>
                            Users
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/events" className="flex items-center justify-start gap-4 w-full">
                            <MdOutlineEmojiEvents className="w-6 h-6 text-blue-900"/>
                            Evenets
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/faculty" className="flex items-center justify-start gap-4 w-full">
                            <FaUserTie className="w-6 h-6 text-blue-900"/>
                            Faculty
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/visitingfaculty" className="flex items-center justify-start gap-4 w-full">
                            <ImUserTie className="w-6 h-6 text-blue-900"/>
                            Visiting Faculty
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/pg" className="flex items-center justify-start gap-4 w-full">
                            <FaUserFriends className="w-6 h-6 text-blue-900"/>
                            Pg
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/projects" className="flex items-center justify-start gap-4 w-full">
                            <GoProject className="w-6 h-6 text-blue-900"/>
                            Projects
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/achievements" className="flex items-center justify-start gap-4 w-full">
                            <GiAchievement className="w-6 h-6 text-blue-900"/>
                            Achievements
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/gallery" className="flex items-center justify-start gap-4 w-full">
                            <RiGalleryFill className="w-6 h-6 text-blue-900"/>
                            Gallery
                        </Link>
                    </li>
                    <li className="flex items-center justify-start gap-4 px-4 py-3 w-full border-b border-gray-300">
                        <Link to="/admin/gallery" className="flex items-center justify-start gap-4 w-full">
                            <RiSlideshow3Fill className="w-6 h-6 text-blue-900"/>
                            Slider
                        </Link>
                    </li>
                    
                </ul>
            </div>

        </div>
      </>

      
     
  )
}

export default SideBar