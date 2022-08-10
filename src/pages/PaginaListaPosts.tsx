import { Box, CircularProgress, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import CommentIcon from '@mui/icons-material/Comment';

const PaginaListaPosts = (props: any) => {
  const params = useParams();
  const [posts, setPosts] = useState([{ id: "", title: "" }]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
      .then(resposta =>
        resposta.json())
      .then(post => {
        setPosts(post);
        setCarregando(false);

      });
  }, [params.id])

  return (
    <Container>
      <NavBarComponent title="Lista de Posts" voltar="true" />
      <Box sx={{ color: 'blue', marginBottom: 1, padding: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {params.name}
        </Typography>
      </Box>
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} letterSpacing={2}>
          {
            posts.map((post: any) =>
              <Box sx={{ border: "1px solid gray", marginBottom: 2, padding: 2 }}>
                <Typography variant="h6" component="div"> {post.title} </Typography>
                <Typography variant="body2" color="text.secondary"> {post.body} </Typography>
                <Link href={`/comentarios/postId=${post.id}/postUser=${params.name}`} color="inherit"> <CommentIcon /> </Link>
              </Box>

            )
          }
        </Box>
      }
    </Container>
  );
}

export default PaginaListaPosts;