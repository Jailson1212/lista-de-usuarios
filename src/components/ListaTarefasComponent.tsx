import { Checkbox, CircularProgress, Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./NavBarComponent";


const ListTarefasComponent = (props: any) => {
    const [usuario, setUsuario] = useState({ id: "", name: "" });
    const [tarefas, setTarefas] = useState([{ id: "", title: "" }]);
    const [carregando, setCarregando] = useState(true);
    let id_user :string;
    tarefas.map((t:any) => id_user = t.userId);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.id}/todos`)
          .then(resposta => 
              resposta.json())
          .then(tarefa => {
            setTarefas(tarefa);
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
            <NavBar title="Lista de Tarefas" tela={props.tela}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {usuario.name}
            </Typography>
            {carregando ? <CircularProgress />  : null}
            {carregando ? null :
                <List>
                    {
                        tarefas.map((tarefa : any) => 
                            <ListItem key={tarefa.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox edge="start" checked={tarefa.completed} tabIndex={-1} disableRipple/>
                                    </ListItemIcon>
                                    <ListItemText primary={tarefa.title} />
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    </List>
            }
        </Container>
    )
}

export default ListTarefasComponent;