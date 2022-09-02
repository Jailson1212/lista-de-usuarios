import { Container } from "@mui/material";
import Home from "./Home";
import Todos from "./Todos";
import Post from "./Post";
import {Route, Routes} from 'react-router-dom';
import Comments from "./Comments";

const App = (props: any) => {
	
	return(
		<Container>
			<Routes>
			    <Route path='/comments/postId=:postId/postUser=:postUser' element={<Comments />} />
				<Route path='/post/:id/:name' element={<Post />}></Route>
				<Route path='/tarefas/:id/:name' element={<Todos />}></Route>
				<Route path='/' element={<Home />} ></Route>
			</Routes>
		</Container>
	)
};

export default App;
