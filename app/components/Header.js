
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';


const style = StyleSheet.create({
	header: {
		height: 50,
		backgroundColor: 'red',
		flexDirection: 'row',
		paddingTop: 0,
		justifyContent: 'space-between'
	},
	title: {
		color: 'white',
		fontSize: 20,
		paddingLeft: 20,
		fontWeight: 'bold',
		paddingTop: 14
	},
	icon: {
		color: 'white',
		fontSize: 28,
		paddingTop: 18
	},
	button: {
		width:80,
		paddingTop: 0,
	},
	back : {
		width:60,
		paddingTop: 0,
	},
})

@connect((store)=>{
	return {
		active : store.routes.tab
	}
})
export default class Header extends Component {

	search(e){
		Actions.search()
		return
	}
	back(e){
		Actions.pop()
		return
	}

	render(){
		let backbutton = null
		if(this.props.back)
			backbutton = <Button onPress={this.back.bind(this)} transparent style={style.back}>
							<Icon name='ios-arrow-back' style={style.icon} />
				 		 </Button>

		return <View style={style.header}>
			{backbutton}
			<Text style={style.title}>{this.props.active}</Text>
			<Button onPress={this.search.bind(this)} transparent style={style.button}>
				<Icon name='ios-search' style={style.icon} />
			</Button>
		</View>
	}
}
