export default function reducer(state={
    user : {
        id: null,
        username: null
    },
    fetching: false,
    fetched: false,
    error: null
}, action){
    if(action.type === "FETCH_USER")
        return {...state, fetching: true}
    if(action.type === "FETCH_USER_FULFILLED")
        return {
            ...state,
            user: {
                id : action.payload.id,
                username : action.payload.username
            },
            fetching: false,
            fetched: true,
            error: null
        }
    if(action.type === "FETCH_USER_REJECTED")
        return {...state, fetching: false, error: action.payload}
    if(action.type === "SET_USERNAME")
        return {...state, name: action.payload}
    return state
}
