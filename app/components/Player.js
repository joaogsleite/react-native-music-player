
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'native-base'



let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#303030',
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
	}
})

export default class Player extends Component {

	constructor(props){
		super(props)
		this.state = {
			music : "Britney Spears - ...Baby One More Time",
			playing : true,
		}
	}

	render(){
		let play = this.state.playing?<Icon style={styles.play} name='ios-pause' />:<Icon style={styles.play} name='ios-play' />

		return <View style={styles.container}>
			<View style={{ height:30, justifyContent: 'center'}}>
				<Text style={styles.music}> {this.state.music} </Text>
			</View>
			<View style={{ justifyContent: 'center'}}>
				{play}
			</View>
		</View>
	}
}
