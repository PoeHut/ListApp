import React from 'react'
import { createStore, applyMiddleware }  from 'redux'
import { Provider }  from 'react-redux'
import thunk from 'redux-thunk';
import reducers  from './src/reducer'
import Routes from './src/Routes'
   
const App = () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Routes />
    </Provider>
  )
}

export default App
