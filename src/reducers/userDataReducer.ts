//https://react.dev/learn/scaling-up-with-reducer-and-context
//https://stackoverflow.com/questions/55396438/generic-type-in-usereducer-for-a-returned-parameter
//https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument
//see this for multiple reducers https://www.youtube.com/watch?v=HbVWd7qKLU4

type Action<T>={
    type: string,
    payload: {
        id: number,
        firstName: string,
    }
}

// type State<T> = {
//     id: number
//     firstName: string
// }




const userDataReducer = ( state = userInitialState , action)  => {
    console.log('reducer fired', {action, state})
    switch (action.type) {
        case 'name':
            return{
                ...state,
                firstName : action.payload.firstName
            }
        default:
            return state
    }
}

export default userDataReducer

export const userInitialState = {
    id: 0,
    firstName : 'Tim'
}
  ;