import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { Container, ListItem, ListItemText, ListSubheader } from "@mui/material";
import List from '@mui/material/List';
import AppBar from "../components/AppBar";
import Home from "./Home";
import Todos from "./Todos";
import Post from "./Post";
import {Route, Routes} from 'react-router-dom';

const App = (props: any) => {
	return(
		<Container>
			<Routes>
			<Route path='/post/:id/:name' element={<Post />}></Route>
				<Route path='/tarefas/:id/:name' element={<Todos />}></Route>
				<Route path='/' element={<Home />} ></Route>
			</Routes>
		</Container>
	)
};

export default App;
