// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Header from "./pages/Header/Header"
import Mainmenu from "./pages/Mainmenu/Mainmenu"
import Sidemenu from "./pages/Sidemenu/Sidemenu"

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div style={{ display: 'flex' }} className='sec'>
          <Sidemenu />
          <Mainmenu />
        </div>
      </div>
    </>
  )
}

export default App
