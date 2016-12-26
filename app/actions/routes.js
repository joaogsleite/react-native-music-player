
export function changeTab(tab){
	return (dispatch)=>{
        dispatch({type: "CHANGE_TAB", payload: tab})
    }
}

export function modal(state){
	return (dispatch)=>{
		dispatch({type: "MODAL", payload: state})
	}
}
