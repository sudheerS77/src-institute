import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const VisitingFacultyTable = () => {
    const rows = [
      {
        id: 1,
        name: "DR.H.THAMIZHCHELVAN",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1601391429_Dr.Ranganathan.JPG",
        deg: "MDS",
        position: "Adjunct Professor",
        status: "Active",
      },
      {
        id: 2,
        name: "DR.H.THAMIZHCHELVAN",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1601391429_Dr.Ranganathan.JPG",
        deg: "MDS",
        position: "Adjunct Professor",
        status: "InActive",
      },
      {
        id: 3,
        name: "DR.H.THAMIZHCHELVAN",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1601391429_Dr.Ranganathan.JPG",
        deg: "MDS",
        position: "Adjunct Professor",
        status: "Active",
      },
      {
        id: 4,
        name: "DR.H.THAMIZHCHELVAN",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1601391429_Dr.Ranganathan.JPG",
        deg: "MDS",
        position: "Adjunct Professor",
        status: "InActive",
      },
     
    ];
  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Faculty Name</TableCell>
            <TableCell className="tableCell">Deg</TableCell>
            <TableCell className="tableCell">Position</TableCell>            
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
            <TableCell className="tableCell">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (            
            <TableRow key={row.id}  className="hover:bg-gray-100">
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="flex items-center">
                  <img src={row.img} alt="" className="w-12 h-12 rounded-md mr-10 fit" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.deg}</TableCell>
              <TableCell className="tableCell">{row.position}</TableCell>              
              <TableCell className="tableCell">
                <span className={row.status === "Active" ? "p-2 rounded-sm text-white bg-green-900" : "p-2 rounded-sm text-yellow-100 bg-yellow-500"}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                  <BiEdit className="w-6 h-6 text-blue-600"/>
                </TableCell>  
              <TableCell className="tableCell">
                  <MdDelete className="w-6 h-6 text-red-600"/>
                </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
    </>
  )
}

export default VisitingFacultyTable;