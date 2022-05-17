import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { CreateUser } from './components/CreateUser'
import { CreateNote } from './components/CreateNote'
import { NoteList } from './components/NoteList'


export function RoutesApp() {
  return (
    <HashRouter>
      <Navigation/>
        <Routes>
            <Route path='/user' element={<CreateUser/>}/>
            <Route path='/edit/:id' element={ <CreateNote/>}/>
            <Route path='/create' element={ <CreateNote/>}/>
            <Route path='/' element={<NoteList/>}/>
        </Routes>
    </HashRouter>
  )
}
