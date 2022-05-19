import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdViewInAr } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AchievementTable = (props) => {
    const rows = [
      {
        id: 1,
        name: "Project name",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1257593313__VKP9672-min.jpg",
        description: "TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.",
      },
      {
        id: 2,
        name: "Project name",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1257593313__VKP9672-min.jpg",
        description: "TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.",
      },
      {
        id: 3,
        name: "Project name",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1257593313__VKP9672-min.jpg",
        description: "TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.",
      },
      {
        id: 4,
        name: "Project name",
        img: "https://oralpath.sriher.com/resources/pcadmin/img/faculties/1257593313__VKP9672-min.jpg",
        description: "TEACHING AND RESEARCH I have an interest in baking cakes and am the co-founder of Sumira_bakeology( Home Baker).Also have a profound interest in the Gospel, reading books and listening to piano pieces.",
      },                 
    ];

  return (
    <>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Project Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>            
            <TableCell className="tableCell">View</TableCell>
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
              <TableCell className="tableCell w-96" >{row.description}</TableCell>
              <TableCell className="tableCell">
                  <MdViewInAr className="w-6 h-6 text-sky-900"/>
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

export default AchievementTable;