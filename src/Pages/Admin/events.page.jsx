import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
  import { IoMdAdd } from 'react-icons/io';

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import DetailsTable from '../../components/AdminComponents/DetailsTable';
import AddEvent from '../../components/AdminComponents/EventFeatures/addEvent';

const EventsPage = (props) => {
  const cardData = [
    {
      name: "EVENTS",
      count: 720,
      link: "see all Events",
      linkUrl: "/admin/events",
      icon: <FaUserFriends />,
    }
  ]
  
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
                  <Link to="/admin/addevent"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1 shadow-xl"
                    // onClick={openModal}
                    >
                    Add Event<IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10 shadow-xl'>
                  { props.urltype === "events" && <DetailsTable /> }
                  { props.urltype === "addevent" && <AddEvent /> }
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default EventsPage;
