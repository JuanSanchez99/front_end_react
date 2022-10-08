import React from "react";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "document_id", headerName: "Document ID" },
  { field: "document_type", headerName: "Document Type" },
  { field: "name", headerName: "First name" },
  { field: "lastname", headerName: "Last name" },
  { field: "hobbies", headerName: "Hobbies" },
];

export default function PeopleTable() {
  const people = useSelector((state) => state.people);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Document ID</TableCell>
            <TableCell>Document Type</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Hobbies</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.document_id}
              </TableCell>
              <TableCell>{row.document_type}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.hobbies}</TableCell>
              <TableCell>Delete Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
