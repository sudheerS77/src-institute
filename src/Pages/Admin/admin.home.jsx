import React from 'react';
import { FaUserFriends, FaUserTie } from 'react-icons/fa'
import { ImUserTie } from "react-icons/im";

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import DataTable from '../../components/Authentication/dataTable';

const AdminHomePage = () => {    
  const cardData = [
    {
      name: "STUDENTS",
      count: 720,
      link: "see all Students",
      linkUrl: "/admin/pg",
      icon: <FaUserFriends />,
    },
    {
      name: "FACULTY",
      count: 12,
      link: "View all faculty",
      linkUrl: "/admin/faculty",
      icon: <FaUserTie />,
    },
    {
      name: "VISITING FACULTY",
      count: 3,
      link: "Visiting Faculty",
      linkUrl: "/admin/visiting-faculty",
      icon: <FaUserTie />,
    }

  ]
  return (
    <>
        <div className="flex flex-row w-full">
            <div className="w-1/4">
              <SideBar />
            </div>
            <div className="w-full flex flex-col">
              <AdminNavBar />
              <div className="flex flex-col gap-10 mt-5">
               <div className="flex flex-row items-center justify-around w-full">
               {
                  cardData.map((data) => <Card {...data}/>)
                }
               </div>
                <div className='mx-10'>
                  <DataTable />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default AdminHomePage