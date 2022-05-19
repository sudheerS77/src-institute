import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdAdd } from 'react-icons/io';
import { FaUserTie } from 'react-icons/fa';

//Components
import SideBar from '../../components/AdminComponents/siderbar'
import AdminNavBar from '../../components/AdminComponents/adminNavBar';
import Card from '../../components/AdminComponents/card';
import AddProject from "../../components/AdminComponents/ProjectFeatures/addProject";
import ProjectTable from "../../components/AdminComponents/ProjectFeatures/projectTable";

const ProjectsPage = (props) => {
    const cardData = [
        {
            name: "PROJECTS",
            count: 12,
            link: "View all projects",
            linkUrl: "/admin/projects",
            icon: <FaUserTie />,
        },
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
                  <Link to="/admin/addproject"
                    className="text-white bg-green-800 text-lg font-light px-2 py-1 rounded-md flex items-center gap-1"
                    // onClick={openModal}
                    >
                    Add Project <IoMdAdd />
                  </Link>
                </div>
                <div className='mx-10'>
                  { props.urltype === "projects" && <ProjectTable />  }
                  { props.urltype === "addproject" && <AddProject /> }
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default ProjectsPage;