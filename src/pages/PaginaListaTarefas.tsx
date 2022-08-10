import { Checkbox, CircularProgress, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";


const PaginaListaTarefas = (props: any) => {

    const params = useParams();
    const [tarefas, setTarefas] = useState([{ id: "", title: "" }]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/todos`)
            .then(resposta =>
                resposta.json())
            .then(tarefa => {
                setTarefas(tarefa);
                setCarregando(false);

            });
    }, [params.id]);

    return (
        <Container>
            <NavBarComponent title="Lista de Tarefas" voltar="true" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {params.name}
            </Typography>
            {carregando ? <CircularProgress /> : null}
            {carregando ? null :
                <List>
                    {
                        tarefas.map((tarefa: any) =>
                            <ListItem key={tarefa.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Checkbox edge="start" checked={tarefa.completed} tabIndex={-1} disableRipple />
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