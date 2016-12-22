import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ListItem, Thumbnail, Text, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'

const style = StyleSheet.create({
	text: {
		height: 43,
	},
	icon : {
		fontSize: 18,
		color: '#444',
	},
	notes: {
		marginTop: 5,
		flexDirection: 'row',
	},
	note: {
		fontSize: 25,
		marginRight: 20,
	}
})

export default class Item extends Component {

	constructor(props){
		super(props)
		this.counter = 0;
	}

	handleClik(e){
		this.counter++
		Actions.selectItem({title:this.props.title, visible:true, id:'43rtegfew', clicked:this.counter })
		return;
	}

	render(){
		let playing = this.props.playing?{backgroundColor:'#ffffdd'}:{}
		return <ListItem onPress={this.handleClik.bind(this)}>
    		<Thumbnail square size={70} source={{uri:'https://i.ytimg.com/vi/CduA0TULnow/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=aWKzp-5jJ78FuQ5LzMqiVu6M6Uo'}} />
            <Text style={style.text}>{this.props.title}</Text>
            <View style={style.notes}>
				<Text style={style.note}>
					<Icon style={style.icon} name="md-time" />
					<Text> 4:33</Text>
				</Text>
				<Text style={style.note}>
					<Icon style={style.icon} name="md-person" />
					<Text> AdeleVEVO</Text>
				</Text>
			</View>
        </ListItem>

	}
}
