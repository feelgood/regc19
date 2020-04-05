import React, { FunctionComponent, useEffect } from 'react'

import { Navbar } from './components/common/Navbar/Navbar'
import { store } from './redux'
import actions from './redux/actions'

const App: FunctionComponent = () => {
  useEffect(() => {
    store.dispatch(actions.requests.fetchRegistration())
  })
  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
    </div>
  )
}

export default App
