import { AppBar, Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = (props: any) => {
    const params = useParams();
    const [posts, setPosts] = useState([{id : "", title : ""}]);


    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/todos`)
        .then(resposta =>
            resposta.json())
        .then(post => {
            setPosts(post);

        });
}, [params.id]);

return(
    <Container>
        <AppBar title='Todos'></AppBar>
        <Box sx={{ color: 'green', marginBottom: 1, padding: 1 }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {params.name}
        </Typography>
      </Box>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} letterSpacing={2}>
          {
            posts.map((post: any) =>
              <Box sx={{ border: "1px solid black", marginBottom: 4, padding: 5 }}>
                <Typography variant="h5" component="div"> {post.title} </Typography>
                <Typography variant="body2" color="text.secondary"> {post.body} </Typography>
              </Box>

            )
          }
        </Box>
    </Container>

);
};

export default Post;
