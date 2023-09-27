import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const users = [
  {
    username: 'admin',
    password: 'admin',
  },
  {
    username: 'cucung',
    password: 'cacing',
  },
];

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const isValid = users.find((user) => {
      if (
        user.username === username &&
        user.password === password
      ) {
        return true;
      }
      return false;
    });

    if (isValid) {
      localStorage.setItem('token', '8349u5tiouefdng987er');
      console.log(from, location);
      navigate(from, { replace: true });
    } else {
      alert('username / password salah');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <label for="fname">username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label for="fname">password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
