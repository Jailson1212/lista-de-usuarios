import { Container, Typography, List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Todos = (props: any) => {
	const params = useParams();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/todos`)
			.then(resposta =>
				resposta.json())
			.then(todos => {
				setTodos(todos);
	
			});
	}, [params.id]);
    
    
    
    
    
    
    return (
		<Container>
			<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
				{props.user.name}
			</Typography>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				Lista de tarefas
			</Typography>
			<List>
				{todos.map((value : any) => {
					const labelId = `checkbox-list-label-${value.id}`;

					return (
						<ListItem key={value.id} disablePadding>
							<ListItemButton role={undefined} dense>
								<ListItemIcon>
									<Checkbox
										edge="start"
										checked={value.completed}
										tabIndex={-1}
										disableRipple
										inputProps={{
											"aria-labelledby": labelId,
										}}
									/>
								</ListItemIcon>
								<ListItemText
									id={labelId}
									primary={value.title}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Container>
	);
};

export default Todos;