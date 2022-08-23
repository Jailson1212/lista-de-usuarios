import { Container, List, ListItemText, ListSubheader } from "@mui/material";
import { ListAlt, Article } from '@mui/icons-material';
import { useState, useEffect } from "react";

const Home = (props: any) => {
    const [users, setUsers] = useState({ id: "", name: "" });
    const [loading, setLoading] = useState(true);
};

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(resposta => resposta.json())
      .then(user => {
        setUsers(user);
        setLoading(false);
      });
  })
	return(
    <List
    sx={{ width: '100%', maxWidth: 3600, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
    <ListSubheader component="div" id="nested-list-subheader">Lista de Usuários</ListSubheader>
    }>
    {
        users.map((user) => {
        <ListItemText key={user.id} primary={user.name}></ListItemText>
            <ListAlt onClick={() => { props.mudarTela(1); props.mudarUsuario(user) }} />
        })
}
</List>
	);
};

export default Home;

