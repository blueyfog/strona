import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const artist = "@blueyfog";
  const name = "Maria Hajduk"

  return (
    <>
      <Header name={artist}/>
      <Outlet />
      <Footer name={name}/>
    </>
  )
}

export default App
