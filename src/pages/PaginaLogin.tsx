import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NavBarComponent from '../components/NavBarComponent';
import { useState } from 'react';

const Login = (props : any) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  
    const handleChangeEmail = (event : any) => {
    setUserEmail(event.target.value);
}
const handleChangePass = (event : any) => {
        setUserPass(event.target.value);
    }

   
  return (
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoFocus value={userEmail} onChange={handleChangeEmail}/>
            <TextField margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" value={userPass} onChange={handleChangePass}/>
            <Button type="submit" fullWidth  variant="contained" sx={{ mt: 3, mb: 2 }}  href="/usuarios" disabled={!(userEmail.length > 10 && userPass.length >= 6)}>
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                {"Não tem uma conta? " }
                <Link href={`/cadastro`} variant="body2">
                    {"Cadastre-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}


export default Login;