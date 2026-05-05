import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {

  return (
    <Provider store={store}>
      <Navbar/>
      <Body/>
    </Provider>
  )
}

export default App
