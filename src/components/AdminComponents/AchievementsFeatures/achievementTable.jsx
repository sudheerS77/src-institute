import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdViewInAr } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddAchievement from './addAchievement';

//Redux actions
import { deleteAchievement, getAchievement } from "../../../Redux/Reducer/Achivements/achievements.action"


const AchievementTable = () => {
  const [achievements, setAchievements] = useState([]);

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.achievement);

  useEffect(() => {
    dispatch(getAchievement());
  }, []);

  useEffect(() => {
      reduxState?.achievements && setAchievements(reduxState.achievements.achievememts);
  }, [reduxState]);
    
  let idCount = 1;

  const deleteItem = (_id) => {
    dispatch(deleteAchievement(_id));
    window.location.reload();
  }

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Project Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>           
            <TableCell className="tableCell">User Type</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { achievements?.length > 0 ? (
          achievements?.map((row) => (            
            <TableRow key={row._id}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{idCount++}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.image} alt="" className="w-12 h-12 rounded-md mr-10 fit" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell w-96" >
                <p className="w-64 truncate">{row.description}</p>
              </TableCell>
              <TableCell className="tableCell">{row.userType}</TableCell>
              
              <TableCell className="tableCell">
                <Link to={`/admin/achievemnts/${row._id}`}>
                  <BiEdit className="w-6 h-6 text-blue-600"/>
                </Link>
              </TableCell>  
              <TableCell className="tableCell">
                <Link to="/admin/achievements"
                  onClick={() => deleteItem(row._id)}
                >
                  <MdDelete className="w-6 h-6 text-red-600"/>
                </Link>
              </TableCell>  
            </TableRow>
          ))): <></>}
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default AchievementTable;