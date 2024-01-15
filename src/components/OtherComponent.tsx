import React from 'react'
import { useStateContext } from '../context/stateContext'
import * as docActions from '../actions/docsActions'

const OtherComponent = ()=>{
    const { state, dispatch } = useStateContext() 
   
    const handleChangeSource =()=>{
        dispatch(docActions.setSource({source : 'AGENT PORTAL'}))
    }
    
    return(
        <div>
            <button onClick={()=> handleChangeSource()}>
               Update Source  : Other Comp
            </button>
    
        </div>
    )
}

export default OtherComponent