
import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { Icon, Button } from 'native-base'

import Tabs from './Tabs'
import Home from './Tabs/Home'
import Playlists from './Tabs/Playlists'
import Subscriptions from './Tabs/Subscriptions'
import Account from './Tabs/Account'

import Player from '../../Player'
import Header from '../../Header'

const style =  StyleSheet.create({
	container: { flex: 1 },
	tabs : { flex: 1 },
})


export default class Main extends Component {
	constructor(props){
		super(props)
	}

	swipe({ direction, distance, velocity }){
		alert(direction)
	}

  	render() {

		return <View style={style.container}>
			<Header />
			<View style={style.tabs}>
				<Tabs>
					<Home icon='ios-home' title='Home' />
					<Playlists icon='md-list' title='Playlists' />
					<Subscriptions icon='ios-book' title='Subscriptions' />
					<Account icon='ios-person' title='Account' />
				</Tabs>
			</View>
		</View>

  	}
}
