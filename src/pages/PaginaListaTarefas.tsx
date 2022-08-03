import { Checkbox, CircularProgress, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const PaginaListaTarefas = (props: any) => {
    const [tarefas, setTarefas] = useState([{ id: "", title: "" }]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.usuario_tarefa.id}/todos`)
          .then(resposta => 
              resposta.json())
          .then(tarefa => {
            setTarefas(tarefa);
            setCarregando(false);
            
        });
    },[props.usuario_tarefa.id]) ;

    return (
        <Container>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {props.usuario_tarefa.name}
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

export default PaginaListaTarefas;