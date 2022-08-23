import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Container, ListItem, ListItemText, ListSubheader } from "@mui/material";
import List from '@mui/material/List';
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
	const [loading, setLoading] = useState(true);
	const [tela, setTela] = useState(1);
	const telas = [
		<Home data={users} loading={loading} />,
		<Todos user={ {id: 2, name: "Ervin Howell"} } />,
	];

  const handleMudancaTela = (index: number) => {
    setTela(index);
  }

  const handleUsuario = (id: string) => {
    setUsuario(id);
  }

  const [nroTela, setNroTela] = useState(0);
  const telas = [
    { id: 0, title: "Lista de Usuários", tela: <Home mudarTela={handleMudancaTela} mudarUsuario={handleUsuario} /> },
    { id: 1, title: "Lista de Tarefas", tela: <Todos mudarTela={handleMudancaTela} usuario_tarefa={usuario} /> },
    //{ id: 2, title: "Lista de Posts", tela: <PageListPosts mudarTela={handleMudancaTela} usuario_post={usuario} /> }
  ];


	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {
				setUsers(json);
				setLoading(false);
			});
	});
  

	return (
    <Container sx={{maxWidth: 400}}>
    <AppBar title={telas[nroTela].title} mudarTela={handleMudancaTela} tela={telas[nroTela].id}/>
    {telas[nroTela].tela}
    </Container>
	);
};

export default App;
