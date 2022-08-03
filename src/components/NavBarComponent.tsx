import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBarComponent = (props: any) => {
  let voltar = false;
  if (props.tela == 1 || props.tela == 2) {
    voltar = true;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {voltar ? <Button color="inherit" onClick={() => props.mudarTela(0)}> Voltar </Button> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBarComponent;