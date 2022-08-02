import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NavBar from '../components/NavBarComponent';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

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
    <NavBar title="Lista de usuários"/>
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <List>
            {
              usuarios.map((user : any) =>
                <ListItemButton>
                  <ListItemText key={user.id} primary={user.name} />
                  <ListItemIcon>
                    <ListAltIcon onClick={() => { props.mudarTela(1); props.id(user.id)}}/>
                    <ArticleIcon onClick={() => props.mudarTela(2)} id={user.id}/>
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