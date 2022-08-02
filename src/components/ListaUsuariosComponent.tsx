import { useEffect, useState } from "react";
import { CircularProgress, Container, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListAlt, Article } from '@mui/icons-material';
import NavBar from '../components/NavBarComponent';

const ListUsuariosComponent = (props: any) => {
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
    <NavBar title="Lista de usuários" tela={props.tela}/>
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <List>
            {
              usuarios.map((user : any) =>
                <ListItemButton>
                  <ListItemText key={user.id} primary={user.name} />
                  <ListItemIcon>
                    <ListAlt onClick={() => { props.mudarTela(1); props.id(user.id)}}/>
                    <Article onClick={() => { props.mudarTela(2); props.id(user.id)}}/>
                  </ListItemIcon>
                </ListItemButton>
              )
            }
          </List>
      }
    </Container>
  )
}

export default ListUsuariosComponent;