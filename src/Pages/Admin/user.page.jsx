import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import AchievementTable from "../../components/AdminComponents/AchievementsFeatures/achievementTable";
import AddAchievement from "../../components/AdminComponents/AchievementsFeatures/addAchievement";
import UpdateAchievement from '../../components/AdminComponents/AchievementsFeatures/updateAchievement';
import AchUpdate from './achievemenetUpdate.page';
import DataTable from "../../components/AdminComponents/dataTable";

//Redux actions
import { getAllUsers } from '../../Redux/Reducer/User/user.action';
import AddUser from '../../components/AdminComponents/addUser';

const UserPage = (props) => {
  const [users, setUsers] = useState([]);

  const reduxState = useSelector((globalState) => globalState.user);
  useEffect(() => {
    reduxState?.allUsers && setUsers(reduxState?.allUsers.user);
  }, [reduxState])
  
    const cardData = [
        {
            name: "ACHIEVEMENTS",
            count: users ? users.length : 0,
            link: "View all achievements",
            linkUrl: "/admin/achievements",
            icon: <FaUserTie />,
        },
      ]

  return (
    <>
        <div className="flex flex-row w-full">
            <div className="w-1/5">
              <SideBar />
            </div>
            <div className="w-full flex flex-col gap-5">
              <AdminNavBar />
              <div className="flex flex-col gap-10 mt-5">
                <div className="flex flex-row items-end justify-between mx-10">
                  <div className="flex flex-row items-start">
                    {
                      cardData.map((data) => <Card {...data}/>)
                    }
                  </div>
                  <Link to="/admin/adduser"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    Add User <IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10'>
                  { props.urltype === "users" && <DataTable />  }
                  { props.urltype === "adduser" && <AddUser /> } 
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default UserPage;