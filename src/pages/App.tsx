import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import ListUsuariosComponent from '../components/ListaUsuariosComponent';
import ListTarefasComponent from '../components/ListaTarefasComponent';
import ListPostsComponent from '../components/ListPostsComponent';

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
    <ListUsuariosComponent mudarTela={handleMudancaTela} id={getIdUser} tela={0}/>,
    <ListTarefasComponent mudarTela={handleMudancaTela} id={usuario} tela={1}/>,
    <ListPostsComponent mudarTela={handleMudancaTela} id={usuario} tela={2}/>
  ];


  return (
    <Container>
      {telas[nroTela]}
    </Container>
  )
}

export default ListComponent