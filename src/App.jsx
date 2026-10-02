import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailPage from './pages/DetailPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='wrap'>
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detail/:id' element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
