import React from 'react'
import './css/App.css'

import Footer from './components/Footer'

const 
  pub = process.env.PUBLIC_URL,
  icon = `${pub}/social-icons`,
  pngLogo = pub + '/icarus.gg-500x500.png',
  icons = {
    discord: `${icon}/discord.png` 
  }

function App() {

  const onHeaderClick = () => {
    window.open( 'https://discord.gg/XB6mepj' )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div 
          onClick ={ () => onHeaderClick() }
          className="btn-header clickable"
        >
          <img src={pngLogo} className="App-logo" alt="logo" />
          <p>
            hello friend
          </p>
        </div>
      </header>

      <hr />

      <div className="centered">
        <Footer />
      </div>

    </div>
  )
} 

export default App
