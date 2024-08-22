import ReactDOM from 'react-dom/client'

import Dungeon from './features/Dungeon/DungeonScene'
import Game from "./features/Battle/BattleScene"
import Setting from './features/Setting/SettingScene'
import Home from './features/Home/HomeScene'
import Store from './features/Store/StoreScene'
import Equip from './features/Equip/EquipScene'

import Header from './components/Header'
import Footer from './components/Footer'

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
        <Route path='/Dungeon' element={<Dungeon />} />
        <Route path='/game' element={<Game />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/store' element={<Store />} />
        <Route path='/equip' element={<Equip />} />
      </Routes>
    </div>
    <div className='sticky bottom-0 bg-gray-800 w-screen h-[10vh]'>
      <Footer />
    </div>
    
  </BrowserRouter>
)
