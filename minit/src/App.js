import React from 'react';
import Login from './components/Login';
import Registro from './components/Registro';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/styles.css'; // Importar estilos globales

function App() {
    return (
        <Router>
          <div>
            <Login />
            <Registro />
        </div>
        </Router>
    );
}

export default App;
