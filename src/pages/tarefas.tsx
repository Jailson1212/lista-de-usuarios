import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ListComponent = (props: any) => {
  const [tarefas, setTarefas] = useState([{id: "", userid:"", title: "", completed:""}]);
  const [carregando, setCarregando] = useState(true);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
      .then(resposta => resposta.json())
      .then(tarefa => {
        setTarefas(tarefa);
        setCarregando(false);
       });
    })
  
  return (
    <Grid container direction="column" wrap="nowrap">
        TESTE
    </Grid>
  )
}

export default ListComponent