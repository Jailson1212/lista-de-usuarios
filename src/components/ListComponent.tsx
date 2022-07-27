import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ListComponent = (props: any) => {
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
    <Grid container direction="column" wrap="nowrap">
    <Grid item xs> 
    <Typography noWrap variant="h5"> Lista de usuários </Typography>
    </Grid>
      { carregando ? <h3> <CircularProgress/> </h3> : null }
      { carregando ?  null : 
      
      <Grid item xs={2}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader"
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

export default ListComponent