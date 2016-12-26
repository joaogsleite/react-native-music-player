
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Slider from 'react-native-slider'
import { Icon, Spinner } from 'native-base'
import { connect } from 'react-redux'

import Video from 'react-native-video'

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#303030',
	},
	subcontainer: {
		flex: 1,
	},
	music: {
		color: 'white',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	play: {
		color: 'white',
		fontSize: 44,
		textAlign: 'center',
	},
	bar: {
		height: 5,
		flexDirection: 'row',
	},
	progress : {
		backgroundColor: 'red',
		flex: 1
	},
	left: {
		backgroundColor: '#303030',
		flex: 10
	},
	note: {
		textAlign: 'center',
		color: 'white',
		fontSize: 14,
	},
	slider: {
    	height: 30,
		marginBottom: -18,
  	},
  	sliderTrack: {
    	height: 10,
		backgroundColor: '#303030',
  	},
  	sliderThumb: {
	    width: 10,
	    height: 10,
	    backgroundColor: 'red',
	    borderRadius: 12 / 2,
	    shadowColor: 'red',
	    shadowOffset: {width: 0, height: 0},
	    shadowRadius: 2,
	    shadowOpacity: 1,
  	}
})
@connect((store)=>{
	return {
		info : store.player.info,
		url : store.player.url,
		ready : store.player.ready,
		error : store.player.error,
	}
})
export default class Player extends Component {

	constructor(props){
		super(props)
		this.state = {
			playing : false,
			ready : false,
			currentTime : 0,
			sliding: false,
			buffering: false,
			end : false,
		}
	}
	setTime(params){
		if(!this.state.sliding)
      		this.setState({ currentTime: params.currentTime })

		if(params.currentTime+1>this.props.info.duration)
			this.setState({end:true, buffering: false, playing: false})
		else if(params.playableDuration-0.5 < params.currentTime)
			this.setState({ buffering: true })
		else
			this.setState({ buffering: false })
  	}
	play(e){
		this.setState({playing:!this.state.playing})
	}
	load(e){
		this.setState({ready: false})
	}
	loadComplete(e){
		this.setState({ready: true, playing : true})
	}
	onSlidingStart(){
    	this.setState({ sliding: true })
  	}
	onSlidingChange(value){
		let position = value * this.props.info.duration
    	this.setState({ currentTime: position })
	}
	onSlidingComplete(){
    	this.refs.audio.seek( this.state.currentTime )
    	this.setState({ sliding: false, end: false })
  	}
	end(e){
		alert('end')
		this.setState({ end: true })
	}
	render(){

		let percentage = this.state.currentTime / this.props.info.duration
		let opacity = this.state.ready?1:0

		let play
		if(this.props.info.title=='')
			play = <Text style={styles.note}>choose a video to listen</Text>
		else if(!this.state.ready || this.state.buffering)
			play = <Spinner style={{marginTop:-20}} color='white' />
		else if(this.state.playing)
			play = <Icon style={styles.play} name='ios-pause' />
		else
			play = <Icon style={styles.play} name='ios-play' />

		return <View style={styles.container}>
			<Slider
		        minimumTrackTintColor='#ff0000'
		        style={ [styles.slider,{opacity}] }
		        trackStyle={ styles.sliderTrack }
		        thumbStyle={ styles.sliderThumb }
				onSlidingStart={ this.onSlidingStart.bind(this) }
            	onSlidingComplete={ this.onSlidingComplete.bind(this) }
				onValueChange={ this.onSlidingChange.bind(this) }
				onEnd={ this.end.bind(this) }
		        value={ percentage } />

			<View style={{ height:30, justifyContent: 'center'}}>
				<Text style={styles.music}>
					{this.state.end?'choose another video to listen':this.props.info.title}
				</Text>
			</View>
			<Video
				source={{uri: this.props.url}}
            	ref="audio"
            	volume={ 1 }
            	muted={false}
				onLoadStart={this.load.bind(this)}
				onLoad={this.loadComplete.bind(this)}
				onProgress={ this.setTime.bind(this) }
				playInBackground={true}
				paused={!this.state.playing}
            	resizeMode="cover"
            	repeat={false}
			/>
			<View>
				<TouchableOpacity style={{alignItems:'center',justifyContent: 'center'}} onPress={this.play.bind(this)}>
					{play}
				</TouchableOpacity>
			</View>
		</View>
	}
}
