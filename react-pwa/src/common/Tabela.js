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
import Swal from 'sweetalert2'
import { Button } from '@material-ui/core';



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

  const [prevState, setState] = useState([]);




  function confirmButton(id, professor){
    Swal.fire({
      title: 'Tem a certeza?',
      text: 'pretende marcar falta ao prof:'+professor,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        //deleteProduto(id);
        setState(prevState => [...prevState, 'some data'] );
        
      }else{
        setState(prevState => [...prevState, 'some data'] );
      }
    })
  
  }

  useEffect(() =>{
    async function getAulas(){
      const response = await axiosInstance.get('/api/presencas');
      setAulas([...response.data]);
      //setisLoading(false);
      console.log(response.data);
  
    }
    getAulas();
  
    },[prevState]);
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
        
            <StyledTableRow key={row.id} >
              
              <StyledTableCell component="th" scope="row">{row.summary}</StyledTableCell>
              <StyledTableCell align="right">{row.location = row.location.split("-").pop()}</StyledTableCell>
              <StyledTableCell align="right">{row.professor}</StyledTableCell>
              <StyledTableCell align="right">{row.start = row.start.split("T").pop()}</StyledTableCell>
              <StyledTableCell align="right">{row.end = row.end.split("T").pop()}</StyledTableCell>
              <Button onClick={()=>confirmButton(row.id, row.professor)} variant="sucess" size="lg">Marcar</Button>
          
            </StyledTableRow>
   
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
