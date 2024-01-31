import React from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'
function App() {
  WebFont.load({
    google: {
      families: ["Montserrat"]
    }
  })
  document.title = "Illumi"
  
  return (
    <div className="app">
      <Router/>
    </div>
  )
}

export default App