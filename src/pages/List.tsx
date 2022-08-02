import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Grid from '@mui/material/Grid';
import { IconButton, ListItem, Typography } from '@mui/material';
import NavBar from '../components/NavBarComponent';
import ListTarefasComponent from '../components/ListaTarefasComponent';
import ListPostsComponent from '../components/ListPostsComponent';

const ListComponent = (props: any) => {
  const [usuarios, setUsuarios] = useState([{ id: "", name: "" }]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(resposta => resposta.json())
      .then(usuario => {
        setUsuarios(usuario);
        setCarregando(false);
      });
  })
  const [nroTela, setNroTela] = useState(0);
  const telas = [
    <ListTarefasComponent/>,
    <ListPostsComponent/>
  ];

  const handleMudancaTela = (index: number) => {
    setNroTela(index);
  }

  return (
    <Grid container direction="column" wrap="nowrap">
    <NavBar title="Lista de usuários"/>
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <Grid item xs={2}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
            {
              usuarios.map(user =>
             <ListItem>
                <ListItemText key={user.id} primary={user.name} />
                <ListItemIcon>
                <IconButton edge="end" aria-label="tarefas">
                  <ListAltIcon onClick={() => handleMudancaTela(0)} />
                </IconButton>
                <IconButton edge="end" aria-label="posts">
                  <ArticleIcon onClick={() => handleMudancaTela(1)}/>
                </IconButton>
                </ListItemIcon>
             </ListItem>
              )
            }
          </List>
        </Grid>
      }
    </Grid>
  )
}

export default ListComponent