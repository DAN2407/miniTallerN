import React from 'react';

function Registro() {
    return (
        <div>
            <h2>Registro</h2>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registro;