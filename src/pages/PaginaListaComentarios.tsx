import { Box, CircularProgress, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import CommentIcon from '@mui/icons-material/Comment';

const PaginaListaComentarios = (props: any) => {
  const params = useParams();
  const [comentarios, setComentarios] = useState([{ id: "", name: "" }]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
      .then(resposta =>
        resposta.json())
      .then(post => {
        setComentarios(post);
        setCarregando(false);

      });
  }, [params.id])

  return (
    <Container>
      <NavBarComponent title="Lista de Comentários" voltar_posts="true" id={params.postId} username={params.postUser} />
      <Box sx={{ color: 'blue', marginBottom: 1, padding: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {params.name}
        </Typography>
      </Box>
      {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} letterSpacing={2}>
          {
            comentarios.map((comentario: any) =>
              <Box sx={{ border: "1px solid gray", marginBottom: 2, padding: 2 }}>
                <Typography variant="h6" component="div"> {comentario.name} </Typography>
                <Typography variant="subtitle2" component="div"> {comentario.email} </Typography>
                <Typography variant="body2" color="text.secondary"> {comentario.body} </Typography>

              </Box>

            )
          }
        </Box>
      }
    </Container>
  );
}

export default PaginaListaComentarios;