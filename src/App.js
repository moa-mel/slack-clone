import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Chat from "./pages/Chat"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import styled from 'styled-components'

function App() {
  return (
    <>
    <Router>
    <Container>
    <Header/>
    <Main>
    <Sidebar/>
    <Routes>
    <Route path='/' element={<Login/>}/>
     <Route path='/room' element={<Chat/>}/>
    </Routes>
    </Main>
    </Container>
    </Router>
    </>
  );
}

export default App;

  const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px auto;
  ` 
  const Main = styled.div`
    display: grid;
    grid-template-columns: 260px auto;
  `