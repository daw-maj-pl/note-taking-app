import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>NoteList</h1>} />
        <Route path="/new" element={<h1>NewNote</h1>} />
        <Route path="/:id">
          <Route index element={<h1>Note</h1>} />
          <Route path="edit" element={<h1>EditNote</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
