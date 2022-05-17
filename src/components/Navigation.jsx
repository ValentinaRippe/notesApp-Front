import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style/Navigation.css'
export function Navigation() {
  return (
    <div className='links'>
      <Link to='/'>NotesApp</Link>
      <Link to='/'>Notes</Link>
      <Link to='/create'>Create Note</Link>
      <Link to='/user'>Create User</Link>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
