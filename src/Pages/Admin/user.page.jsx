import React from 'react'

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import TableList from '../../components/AdminComponents/table';
const UserPage = () => {
  return (
    <>
        <div className="flex flex-row w-full">
            <div className="w-1/4">
              <SideBar />
            </div>
            <div className="w-full flex flex-col gap-5">
              {/* <AdminNavBar /> */}
              <div>
                {/* <Card /> */}
              </div>
            </div>
        </div>
    </>
  )
}

export default UserPage