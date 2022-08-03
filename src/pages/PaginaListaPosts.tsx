import { Avatar, Box, Card, CardContent, CardHeader, CircularProgress, Container, Paper, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const PaginaListaPosts = (props: any) => {
  const [posts, setPosts] = useState([{ id: "", title: "" }]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.usuario_post.id}/posts`)
      .then(resposta =>
        resposta.json())
      .then(post => {
        setPosts(post);
        setCarregando(false);

      });
  }, [props.usuario_post])

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
  }));

  return (
    <Container>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {props.usuario_post.name}
      </Typography>
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
          <StyledPaper
            sx={{
              my: 1,
              mx: 'auto',
              p: 2,
            }}
          >
            {
              posts.map((post: any) =>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.body}
                    </Typography>
                  </CardContent>
                </Card>

              )
            }
          </StyledPaper></Box>
      }
    </Container>
  );
}

export default PaginaListaPosts;