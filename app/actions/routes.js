
export function changeTab(tab){
	return (dispatch)=>{
        dispatch({type: "CHANGE_TAB", payload: tab})
    }
}
