
import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom'
export default function home() {
  let user = useSelector((state) => state.user);
  let navigate = useNavigate()
  return (
    user ? <div>Welcome {user?.username}</div> : <Navigate to="/login" replace />

  )
}
