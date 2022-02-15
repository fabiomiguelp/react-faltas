import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState, useEffect } from 'react';
import { Switch } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';


export default function PopUp({summary,location,professor, start, end}) {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(true);



  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleMarcar = () => {
      setOpen(false);
    };



  
    return (
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen} >
          Marcar Falta
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {professor}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <b>Sala: </b>{location = location.split("-").pop()}
          </DialogContentText>
          <DialogContentText>
          <b>Inicio: </b>{start = start.split("T").pop()}
          </DialogContentText>
          <DialogContentText>
          <b>Fim: </b>{end = end.split("T").pop()}
          </DialogContentText>
        </DialogContent>
        <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={checked} />
              }
              label="Hora Atual"
            />

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" color="success" onClick={handleMarcar} autoFocus>
            Marcar
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }