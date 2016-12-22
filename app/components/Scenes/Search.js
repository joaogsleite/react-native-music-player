
import React, { Component } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'
import { Container, Content, List, Icon, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
	},
	tabs : { flex: 5 },
	header : {
		height:60,
		flexDirection:'row',
		borderWidth:0,
		backgroundColor:'red',
	},
	search: {
		color: 'white',
		paddingLeft: 30,
		flex:1,
		fontSize: 17,
		borderBottomWidth: 0,
	},
	button: {
		width:90,
		paddingBottom: 0,
	},
	icon: {
		color: 'white',
		fontSize: 28,
		paddingTop: 18
	},
})

import Header from '../Header'
import Item from '../Item'


export default class Search extends Component {

	pop(e){
		Actions.pop()
		return
	}

  	render() {
		return <View style={style.container}>
			<View style={style.header}>
				<TextInput underlineColorAndroid="transparent" autoFocus={true} ref='Input' style={style.search} placeholder="Search..." />
				<Button onPress={this.pop.bind(this)} transparent style={style.button}>
					<Icon name='ios-close' style={style.icon} />
				</Button>
			</View>
			<Container>
                <Content>
					<List>
					<Item key={1} title="Britney Spears - Toxic (Official Video)" />
					<Item key={2} title="Britney Spears - Oops!...I Did It Again (Official Video)" />
					<Item key={3} title="Britney Spears - Make Me... (Audio) ft. G-Eazy" />
					<Item key={4} title="Britney Spears - Toxic (Official Video)" />
					</List>
                </Content>
            </Container>
		</View>
	}
}
