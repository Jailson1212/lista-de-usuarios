import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useEffect, useState } from 'react';

const PaginaCadastro = (props: any) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const handleChangeEmail = (event: any) => {
        setUserEmail(event.target.value);
    }
    const handleChangePass = (event: any) => {
        setUserPass(event.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastro
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoFocus value={userEmail} onChange={handleChangeEmail} />
                    <TextField margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" value={userPass} onChange={handleChangePass} />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                        href={`/usuarios/${(Math.random() * 10000).toFixed().toString().substring(0, 4)}`} disabled={!(userEmail.length > 10 && userPass.length >= 6)}>
                        Cadastrar
                    </Button>
                    <Grid container>
                        <Grid item>
                            {"Já tem uma conta? "}
                            <Link href={`/`} variant="body2">
                                {"Faça Login!"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}


export default PaginaCadastro;