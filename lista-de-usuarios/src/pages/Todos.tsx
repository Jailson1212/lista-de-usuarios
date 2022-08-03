import {useState, useEffect} from 'react';

const Todos = (props: any) => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/todos`)
            .then(response => response.json())
            .then(json => setTarefas(json))
    });