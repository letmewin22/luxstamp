import React, {Suspense} from 'react'
import {Landing} from './components/Landing/Landing'
import { Loader } from './components/Loader/Loader'

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<Loader/>}>
        <Landing />
        </Suspense>
    </div>
  )
}

export default App
