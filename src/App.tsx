import React from 'react'
import './App.css'
import OtherComponent from './components/OtherComponent'
import { useStateContext } from './context/stateContext'
import * as docActions from './actions/docsActions'

function App() {  
  const state = useStateContext()
  const { dispatch } = state

  const handleUpdateSource = ({source} : {source : string })=> {
    return dispatch( docActions.setSource({source}));
  }
  

  console.log('what is testMe', state)

  return (

        <div>
          <div>
            in state:
            {state.docsState.source}
          </div>

          <button onClick={ ()=> handleUpdateSource({source:'PUBLIC'})}>Update Source : APP</button>
            <OtherComponent/>
        </div>
      
  )
}

export default App
