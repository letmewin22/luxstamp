import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import {Home} from './pages/Home'
import {Contacts} from './pages/Contacts'

function App() {
  return (
    <div className='app'>
      <TransitionGroup>
        <CSSTransition
          // key={location.key}
          timeout={{enter: 300, exit: 300}}
          classNames={'fade'}
        >
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/contacts'>
              <Contacts />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
