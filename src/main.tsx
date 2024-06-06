import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import Create from './pages/Create'
import NewCreate from './pages/NewCreate'
import Dungeon from './pages/DungeonSelect'
import Game from "./pages/Game"
import Map from "./pages/map_components/MapCreater"

import Header from './pages/components/Header'
import Footer from './pages/components/Footer'

import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <div className='top-0 z-50 bg-gray-500 w-screen h-[10vh]'>
      <Header />
    </div>
    <div className='w-full h-[80vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/newcreate' element={<NewCreate />} />
        <Route path='/Dungeon' element={<Dungeon />} />
        <Route path='/game' element={<Game />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </div>
    <div className='sticky bottom-0 bg-gray-800 w-screen h-[10vh]'>
      <Footer />
    </div>
    
  </BrowserRouter>
)
