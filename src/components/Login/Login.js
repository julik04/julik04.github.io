import React, { useState } from "react";
import { LOGIN_PATH, SERVER_LOCATION } from "../Constants/Server";
import { useAuth } from "../AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const context = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Заполните все поля");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      const res = await fetch(SERVER_LOCATION + LOGIN_PATH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add this header
        },
        body: JSON.stringify({
          login: username,
          password: password,
          repeatPassword: password,
        }),
      });

      const { data } = await res.json();

      if (data.message === "Success!") {
        setIsLoggedIn(true);
        // sessionStorage.setItem(
        //   "user",
        //   JSON.stringify({ token: data.acessToken, username: data.login })
        // );

        context.login(data.login, data.acessToken);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="container">
        <h2>Добро пожаловать, {username}!</h2>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            context.logout();
            // sessionStorage.removeItem("user");
          }}
        >
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Вход</h2>
        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="username">Логин:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Входим..." : "Войти"}
        </button>
      </form>
    </div>
  );
};

export default Login;
