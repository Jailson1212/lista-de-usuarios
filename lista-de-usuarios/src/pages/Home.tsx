import { AppBar, Container, Link, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { ListAlt, Article } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppNavBar from "../components/AppBar";


const Home = (props: any) => {
    const params = useParams();
    const [users, setUsers] = useState([{ id: "", name: "" }]);
    const [loading, setLoading] = useState(true);
;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(resposta => resposta.json())
      .then(user => {
        setUsers(user);
        setLoading(false);
      });
  })


	return(
    <Container>
      <AppNavBar title="Lista de Usuarios"/>
    <List
    sx={{ width: '100%', maxWidth: 3600, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader">
    {
        users.map((user: any) =>
        <ListItemButton>
          <ListItemText key={user.id} primary={user.name} />
          <ListItemIcon>
            <Link href={`/tarefas/${user.id}/${user.name}`} color="inherit"> <ListAlt /> </Link>
            <Link href={`/post/${user.id}/${user.name}`} color="inherit"> <Article /> </Link>
          </ListItemIcon>
        </ListItemButton>
        )
}
       </List>
     </Container>
)};
    
export default Home;

