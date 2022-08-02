import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ListUsuariosComponent from '../components/ListaUsuariosComponent';
import ListTarefasComponent from '../components/ListaTarefasComponent';
import ListPostsComponent from '../components/ListPostsComponent';
import NavBarComponent from '../components/NavBarComponent';

const ListComponent = (props: any) => {
  const [usuario, setUsuario] = useState("");

  const handleMudancaTela = (index: number) => {
    setNroTela(index);
  }

  const getIdUser = (id: string) => {
    setUsuario(id);
  }

  const [nroTela, setNroTela] = useState(0);
  const telas = [
    <ListUsuariosComponent mudarTela={handleMudancaTela} id={getIdUser}/>,
    <ListTarefasComponent id={usuario}/>,
    <ListPostsComponent/>
  ];


  return (
    <Container>
      {telas[nroTela]}
    </Container>
  )
}

export default ListComponent