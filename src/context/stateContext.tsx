import React, { FC, createContext, useCallback, useContext, useReducer } from 'react';
import { initialState as docsInitialState, docsReducer } from '../reducers/docsReducer';
import userDataReducer, { initialState as usersInitialState } from '../reducers/userDataReducer';

/*---- Types---- */
type Props= {
  children? : React.ReactNode
}

type Action = {
  type: string,
  payload?: unknown
}

export type StateContextType ={
  dispatch: ()=> void,

  userState:{
    id : number,
    firstName: string,
  },

  docState:{
    source: string,
    metadata: [],
    classifications: []
  }
}

/*---- COMPONENT---- */

// Create a context to hold the state
const StateContext = createContext<StateContextType | null>(null);

// Create a component that will provide the context
// IncrementProvider takes in an argument called children
export const StateProvider : FC <Props>  = ({ children }) => {
    
    const [ docsState,  setDocsState ] = useReducer(docsReducer, docsInitialState);
    const [ userState, setUserState ] = useReducer(userDataReducer, usersInitialState);  

    /**See for combinedState && combineDispatch :  https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers/61439698#61439698 */
    const combinedState = React.useMemo(() => ({ docsState, userState, }), [docsState, userState]);
    const combineDispatch  = (...dispatches ) => ( action: Action ) =>
        dispatches.forEach((dispatch) => dispatch( action) );

    const dispatch = useCallback(
      combineDispatch(
        setDocsState, 
        setUserState
        ), 
        
        [ setDocsState, 
          setUserState,
        ]);
    
// In this return value, we passed-in children as the CONSUMER of the PROVIDER
// This will able children components to access the data inside the context
  return (
    <StateContext.Provider value={{ ...combinedState, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

// Create a function that invokes the context 
export const useStateContext = () => {
  return useContext<StateContextType >(StateContext)
}