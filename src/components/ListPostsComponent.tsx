import { Card, CardContent, CircularProgress, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./NavBarComponent";



const ListPostsComponent = (props: any) => {
    const [usuario, setUsuario] = useState({ id: "", name: "" });
    const [posts, setPosts] = useState([{ id: "", title: "" }]);
    const [carregando, setCarregando] = useState(true);
    let id_user :string;
    posts.map((t:any) => id_user = t.userId);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.id}/posts`)
          .then(resposta => 
              resposta.json())
          .then(post => {
            setPosts(post);
            setCarregando(false);
            
        });
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id_user}`)
        .then(resp => resp.json())
        .then(usuario => {
            setUsuario(usuario);
        })
    })
      
    return (
        <Container>
            <NavBar title="Lista de Posts" tela={props.tela}  />
            {carregando ? <h3> <CircularProgress /> </h3> : null}
      {carregando ? null :
                <Container>
            {
                posts.map((post : any) => 
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
            </Container>
                }
    </Container>
  );
}

export default ListPostsComponent;