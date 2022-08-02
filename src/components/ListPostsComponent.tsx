import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBarComponent';

const ListPostsComponent = (props: any) => {
  
  return (
    <Grid container direction="column" wrap="nowrap">
    <NavBar title="Lista de usuários"/>
      {props.carregando ? <h3> <CircularProgress /> </h3> : null}
      {props.carregando ? null :
        <Grid item xs={2}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component="nav" aria-labelledby="nested-list-subheader">
            {
              props.usuarios.map((user : any) =>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText key={user.id} primary={user.name} />
                </ListItemButton>
              )
            }
          </List>
        </Grid>
      }
    </Grid>
  )
}

export default ListPostsComponent;