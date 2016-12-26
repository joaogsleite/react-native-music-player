
import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { Container, Content, List, Icon, Button } from 'native-base'

const style =  StyleSheet.create({
	container: { flex: 1 },
	tabs : { flex: 5 },
})

import Item from '../Item'
import Header from '../Header'
import Player from '../Player'

export default class Playlist extends Component {
	constructor(props){
		super(props)
	}

  	render() {

		return <View style={style.container}>
			<Header back />
			<View style={{height:0, backgroundColor:'red'}} />
			<Container style={{flex:5}}>
                <Content>
					<List>
						<Item key={11} title="2Britney Spears - Toxic (Official Video)" />
						<Item key={12} title="2Britney Spears - Oops!...I Did It Again (Official Video)" />
						<Item key={13} title="2Britney Spears - Make Me... (Audio) ft. G-Eazy" />
						<Item key={14} title="2Britney Spears - Toxic (Official Video)" />
						<Item key={15} title="2Britney Spears - Oops!...I Did It Again (Official Video)" />
						<Item key={16} title="2Britney Spears - Make Me... (Audio) ft. G-Eazy" />
						<Item key={17} title="2Britney Spears - Toxic (Official Video)" />
					</List>
                </Content>
            </Container>
		</View>

  	}
}
