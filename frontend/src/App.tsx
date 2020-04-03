import React, { useEffect, useState } from 'react';
import api from './services/api';

import "./styles/styles.css";
import User from "./components/User";

interface IUser {
  username: string,
  email?: string
}

function App() {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/list-users').then(res => {
      setUsers(res.data);
    })
  });

  return (
    <div>
      { users.map(user => <User key={user.email} user={user}/>) }
    </div>
  );
}

export default App;
