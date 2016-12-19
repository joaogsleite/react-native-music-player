
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

	play(e){
		this.setState({playing:!this.state.playing})
	}

	render(){
		let play = this.state.playing?<Icon style={styles.play} name='ios-pause' />:<Icon style={styles.play} name='ios-play' />

		return <View style={styles.container}>
			<View style={styles.bar}>
				<View style={styles.progress} />
				<View style={styles.left} />
			</View>
			<View style={{ height:30, justifyContent: 'center'}}>
				<Text style={styles.music}> {this.state.music} </Text>
			</View>
			<View>
				<Text style={{textAlign: 'center'}} onPress={this.play.bind(this)} >
					{play}
				</Text>
			</View>
		</View>
	}
}
