import React, { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

function handleLogin() {
    setLogin(true)
}

function handleLogout() {
    setLogin(false)
}

return (
    <div>
        {login ? (
            <div>
                <p>Welcome</p>
                <button onClick={handleLogout}>LogOut</button>
            </div>
        ) : (
            <div>
            <p>Login</p>
            <button onClick={handleLogin}>Login</button>
        </div>
        )
    }
    </div>
)}

export default App
