import axios from 'axios'

export function fetchUser(){
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then((response)=>{
                dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            })
    }
}
