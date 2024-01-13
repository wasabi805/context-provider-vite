import { useReducer } from 'react'
import { UserDispatchContext, UserContext } from './context'

import * as usersActions from './actions/users'
import userDataReducer from './reducers/userDataReducer'
import { userInitialState } from './reducers/userDataReducer'
import './App.css'

console.log('on mount', userInitialState)

function App() {  
  const [users, dispatch] = useReducer( userDataReducer, userInitialState)
  console.log('the stuff', {
    users, dispatch
  })
  const {changeName} = usersActions

  const handleAddTask = ({firstName}: string)=> {

    return dispatch( changeName({ firstName }) );
  }
  return (
    
      <UserContext.Provider value={users}>
        <UserDispatchContext.Provider value={dispatch}>
          <div>
            <button onClick={()=> handleAddTask({firstName:'Ocampo!'})}>Add Name</button>
          </div>
          {users.firstName}
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    
  )
}

export default App
