import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import ListUsuariosComponent from './PaginaListaUsuarios';
import ListTarefasComponent from './PaginaListaTarefas';
import PageListPosts from './PaginaListaPosts';
import NavBarComponent from '../components/NavBarComponent';

const ListComponent = (props: any) => {
  const [usuario, setUsuario] = useState("");

  const handleMudancaTela = (index: number) => {
    setNroTela(index);
  }

  const handleUsuario = (id: string) => {
    setUsuario(id);
  }

  const [nroTela, setNroTela] = useState(0);
  const telas = [
    { id: 0, title: "Lista de Usuários", tela: <ListUsuariosComponent mudarTela={handleMudancaTela} mudarUsuario={handleUsuario} /> },
    { id: 1, title: "Lista de Tarefas", tela: <ListTarefasComponent mudarTela={handleMudancaTela} usuario_tarefa={usuario} /> },
    { id: 2, title: "Lista de Posts", tela: <PageListPosts mudarTela={handleMudancaTela} usuario_post={usuario} /> }
  ];


  return (
    <Container>
      <NavBarComponent title={telas[nroTela].title} mudarTela={handleMudancaTela} tela={telas[nroTela].id} />
      {telas[nroTela].tela}
    </Container>
  )
}

export default ListComponent