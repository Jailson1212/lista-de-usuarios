import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const NavBarComponent = (props: any) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          { props.voltar ? <Link color="inherit" underline='none' href="/"> Voltar </Link> : null }
          { props.voltar_posts ? <Link color="inherit" underline='none' href={`/posts/${props.id}/${props.username}` }> Voltar </Link> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBarComponent;