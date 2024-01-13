export const changeName =({firstName}:string)=>{
    return{
        type: 'name',
        payload:{
            id:0,
            firstName
        }
    }
}