import React from 'react';
import Login from './components/Login';
import Registro from './components/Registro';
import './styles/styles.css'; // Importar estilos globales

function App() {
    return (
        <div>
            <Login />
            <Registro />
        </div>
    );
}

export default App;
