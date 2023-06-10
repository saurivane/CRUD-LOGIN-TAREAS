import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1 className="text-4xl font-bold">Hola Mundo</h1>}/>
        <Route path='/login' element={<h1 className="text-4xl font-bold">Login</h1>}/>
        <Route path='/register' element={<h1 className="text-4xl font-bold">Registro</h1>}/>
        <Route path='/tasks' element={<h1 className="text-4xl font-bold">Tareas</h1>}/>
        <Route path='/add-task' element={<h1 className="text-4xl font-bold">Nueva Tarea</h1>}/>
        <Route path='/tasks/:id' element={<h1 className="text-4xl font-bold">Actualziar Tarea</h1>}/>
        <Route path='/profile' element={<h1 className="text-4xl font-bold">Profile</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App