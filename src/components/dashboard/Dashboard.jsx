import React from 'react'
import "./Dashboard.css"
import { useAuth } from "./../../authContext/AuthContext.jsx"

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.username}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
