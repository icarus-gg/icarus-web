import React from 'react'
import './css/App.css'

import SocialIcons from './components/SocialIcons'

const 
  pub = process.env.PUBLIC_URL,
  icon = `${pub}/social-icons`,
  pngLogo = pub + '/icarus.gg-500x500.png',
  icons = {
    discord: `${icon}/discord.png` 
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pngLogo} className="App-logo" alt="logo" />
        <p>
          hello friend
        </p>
        
      </header>

      <hr />

      <div className="centered">
        <SocialIcons />
      </div>

    </div>
  )
} 

export default App
