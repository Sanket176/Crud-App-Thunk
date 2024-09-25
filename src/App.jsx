import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
