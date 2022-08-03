import { useEffect, useState } from "react";
import { CircularProgress, Container, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListAlt, Article } from '@mui/icons-material';

const PaginaListaUsuarios = (props: any) => {
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
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <List>
          {
            usuarios.map((user: any) =>
              <ListItemButton>
                <ListItemText key={user.id} primary={user.name} />
                <ListItemIcon>
                  <ListAlt onClick={() => { props.mudarTela(1); props.mudarUsuario(user) }} />
                  <Article onClick={() => { props.mudarTela(2); props.mudarUsuario(user) }} />
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