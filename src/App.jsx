import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Main from './assets/components/Main/Main'
import Resualt from './assets/components/Resualt/Resualt'
import Reset from './assets/components/Reset/Reset'

function App() {

  return (
    <>
    <div className="hammasi">
    <div className="hammasi-al">
      <h1>Counter App</h1>
     <div className="click">
     <Main/>
      <Navbar/>
      <Resualt/>
      </div>
       <Reset/>
      </div>
     </div>


    </>
  )
}

export default App
