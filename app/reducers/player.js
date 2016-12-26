export default function reducer(state={
	info : {
		title : '',
		duration : 1,
	},
	url : 'http://google.com',
	ready : false,
	error : null,
}, action){
    if(action.type === "FETCHING_AUDIO")
        return { ...state, ready: false,
			info:{
				title: action.payload.title,
				duration: action.payload.duration
			}
		}

    if(action.type === "FETCH_AUDIO_FULFILLED")
        return {
            ...state,
            ready: true,
			url : action.payload
        }
    if(action.type === "FETCH_AUDIO_REJECTED")
        return { ...state,
			ready: false, error: action.payload,
			info: {title:'',duration:1}, url: 'http://google.com'
		}

    return state
}
