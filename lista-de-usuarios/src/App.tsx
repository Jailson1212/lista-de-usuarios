import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Container, ListItem, ListItemText, ListSubheader } from "@mui/material";
import List from '@mui/material/List';
import AppBar from "./components/AppBar";

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: "", name: "" },
	]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
    <Container sx={{maxWidth: 400}}>
    <AppBar/>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">Lista de Usuários</ListSubheader>
      }
      >
      {
        users.map((user) => (
          <ListItemText key={user.id} primary={user.name}></ListItemText>
        ))
      }
    
    </List>
    </Container>
	);
};

export default App;
