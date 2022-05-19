import React from 'react';
import { FaUser } from "react-icons/fa";

const AdminNavBar = () => {
  return (
    <>
        <div className="w-full h-14 border-b-2 border-grey-900 text-center">
            <div className="w-8 h-8 border p-1 rounded-full">
                {/* <FaUser className="w-full h-full"/> */}
            </div>
        </div>
    </>
  )
};

export default AdminNavBar;