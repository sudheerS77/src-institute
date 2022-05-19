import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { FaUserFriends } from 'react-icons/fa';

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import PGTable from '../../components/AdminComponents/PgFeatures/pgTable';
import AddPG from '../../components/AdminComponents/PgFeatures/addPg';

const PGPage = (props) => {
  
  console.log(props);
    const cardData = [
        {
            name: "STUDENTS",
            count: 720,
            link: "see all Students",
            linkUrl: "/admin/pg",
            icon: <FaUserFriends />,
          }
      ];
     
  return (
    <>          
        <div className="flex flex-row w-full">
            <div className="w-1/4">
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
                  <Link to="/admin/addpg"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                    // onClick={openModal}
                    >
                    Add PG <IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10'>
                  { props.urltype === "pg" && <PGTable /> }
                  { props.urltype === "addpg" && <AddPG /> }
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default PGPage;