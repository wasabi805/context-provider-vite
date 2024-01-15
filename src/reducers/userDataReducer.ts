/** Basic Set up */
//https://react.dev/learn/scaling-up-with-reducer-and-context
//https://stackoverflow.com/questions/55396438/generic-type-in-usereducer-for-a-returned-parameter
//https://stackoverflow.com/questions/23314806/setting-default-value-for-typescript-object-passed-as-argument
//see this for multiple reducers https://www.youtube.com/watch?v=HbVWd7qKLU4

type Action={
    type: string,
    payload : {
        id: number,
        firstName?: string,
    } 
}

type State ={
    id: number,
    firstName: string
}


const userDataReducer = ( state: State = initialState , action : Action)   => {
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

export const initialState = {
    id: 0,
    firstName : 'Tim'
};