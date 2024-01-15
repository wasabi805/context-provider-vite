

export const setSource = ({ source } : {source : string} )=>{
    return{
        type: 'SET_SOURCE',
        payload:{
            source
        }
    }
}