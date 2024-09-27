import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './components/Update'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path='/edit/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
