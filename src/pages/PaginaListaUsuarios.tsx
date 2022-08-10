import { useEffect, useState } from "react";
import { CircularProgress, Container, Link, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListAlt, Article } from '@mui/icons-material';
import NavBarComponent from "../components/NavBarComponent";
import { useParams } from "react-router-dom";

const PaginaListaUsuarios = (props: any) => {
  const params = useParams();
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

  return (
    <Container>
      <NavBarComponent title="Lista de Usuários" login={params.token} />
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <List>
          {
            usuarios.map((user: any) =>
              <ListItemButton>
                <ListItemText key={user.id} primary={user.name} />
                <ListItemIcon>
                  <Link href={`/tarefas/${user.id}/${user.name}`} color="inherit"> <ListAlt /> </Link>
                  <Link href={`/posts/${user.id}/${user.name}`} color="inherit"> <Article /> </Link>
                </ListItemIcon>
              </ListItemButton>
            )
          }
        </List>
      }
    </Container>
  )
}

export default PaginaListaUsuarios;