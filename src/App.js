import React from 'react'
import {Switch, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import {Home} from './pages/Home'
import {Contacts} from './pages/Contacts'

function App() {
  const location = useLocation()
  return (
    <div className='app'>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
