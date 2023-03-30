import React from 'react'
import './App.css'
import Contents from './components/contents/Contents'
import Sidemenu from './components/sidemenu/Sidemenu'

function App() {
  return (
    <div className='main'>
      <div className='sidemenu'>
       <Sidemenu/>
      </div>
      <div className='contents'>
       <Contents/>
      </div>
    </div>
  )
}

export default App
