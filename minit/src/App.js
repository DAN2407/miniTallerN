import React from 'react';
import Login from './components/Login';
import Registro from './components/Registro';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './styles/styles.css'; // Importar estilos globales

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path="/register" element={<Registro />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
