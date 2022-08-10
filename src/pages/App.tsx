import { Container } from '@mui/material';
import PaginaListaUsuarios from './PaginaListaUsuarios';
import PaginaListaTarefas from './PaginaListaTarefas';
import PaginaListaPosts from './PaginaListaPosts';
import PaginaListaComentarios from './PaginaListaComentarios';
import PaginaLogin from './PaginaLogin';
import PaginaCadastro from './PaginaCadastro';
import { Route, Routes } from 'react-router-dom';
;

const App = (props: any) => {

  return (
    <Container>
      <Routes>
        <Route path='/comentarios/postId=:postId/postUser=:postUser' element={<PaginaListaComentarios />} />
        <Route path='/posts/:id/:name' element={<PaginaListaPosts />} />
        <Route path='/tarefas/:id/:name' element={<PaginaListaTarefas />} />
        <Route path='/usuarios/:token' element={<PaginaListaUsuarios />} />
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/' element={<PaginaLogin />} />
      </Routes>
    </Container>
  )
}
export default App;