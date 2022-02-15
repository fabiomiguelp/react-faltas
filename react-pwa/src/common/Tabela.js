import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import axiosInstance from '../axiosInstance';
import { Link } from 'react-router-dom';
import PopUp from './Popup';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));









export default function Tabela() {

  const [aulas, setAulas] = useState ([]);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };


   
  const handleClose = () => {

    setOpen(false);
    console.log(false);


  };



  useEffect(() =>{
    async function getAulas(){
      const response = await axiosInstance.get('/api/presencas');
      setAulas([...response.data]);
      //setisLoading(false);
      console.log(response.data);
  
    }
    getAulas();
  
    },[open]);
  return (
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Aula</StyledTableCell>
            <StyledTableCell align="center">Sala</StyledTableCell>
            <StyledTableCell align="center">Professor</StyledTableCell>
            <StyledTableCell align="center">Inicio</StyledTableCell>
            <StyledTableCell align="center">Fim</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {aulas.map((row) => (
        
            <StyledTableRow key={Math.random} >
              
              <StyledTableCell component="th" scope="row">{row.summary}</StyledTableCell>
              <StyledTableCell align="right">{row.location = row.location.split("-").pop()}</StyledTableCell>
              <StyledTableCell align="right">{row.professor}</StyledTableCell>
              <StyledTableCell align="right">{row.start = row.start.split("T").pop()}</StyledTableCell>
              <StyledTableCell align="right">{row.end = row.end.split("T").pop()}</StyledTableCell>
              <PopUp summary={row.summary} location={row.location} professor={row.professor} start={row.start} end={row.end}/>
          
            </StyledTableRow>
   
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
