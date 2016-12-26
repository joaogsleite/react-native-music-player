
//https://github.com/devnacho/react-native-music-player
import axios from 'axios'

export function playNewVideo(video_id,title,duration){

	return (dispatch)=>{
		dispatch({type: "FETCHING_AUDIO", payload: {title,duration}})

		let yt = 'https://www.youtube.com/watch%3Fv='+video_id
		axios.get('http://www.youtubeinmp3.com/fetch/?format=JSON&video='+yt)
			.then((res)=>{
				dispatch({type: "FETCH_AUDIO_FULFILLED", payload: res.data.link})
			})
			.catch((err)=>{
				console.log(err)
				dispatch({type: "FETCH_AUDIO_REJECTED", payload: err})
			})
	}
}
