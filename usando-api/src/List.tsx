import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const List_Users = (props: any) => {
  const [usuarios, setUsuarios] = useState([{id: "", name: ""}]);
  const [carregando, setCarregando] = useState(true);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(resposta => resposta.json())
      .then(usuario => {
        setUsuarios(usuario);
        setCarregando(false);
       });
    })
  
  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start">
      
      { carregando ? <h3> <CircularProgress/> </h3> : null }
      { carregando ?  null : 
      
      <Grid item xs={2}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Lista de Usuários
          </ListSubheader>
        }
      >
          { 
            usuarios.map(user => 
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText key={user.id} primary={user.name} />
              </ListItemButton>
            )
          }
        </List>
      </Grid>
      }
    </Grid>

    

    
  )
}

export default List_Users