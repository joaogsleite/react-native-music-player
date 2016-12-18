
import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { Icon, Button } from 'native-base'

import Tabs from './Tabs'
import Home from './Tabs/Home'
import Playlists from './Tabs/Playlists'
import Subscriptions from './Tabs/Subscriptions'
import Account from './Tabs/Account'

import Player from './Player'
import Search from './Search'

const styles = require('../styles')

export default class App extends Component {
	constructor(props){
		super(props)
	}
  	render() {

		return <View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Youtubify</Text>
				<Button transparent onPress={this.props.search} style={styles.button}>
					<Icon name='ios-search' style={styles.icon} />
				</Button>
			</View>
			<View style={styles.tabs}>
				<Tabs>
					<Home title='ios-home' />
					<Playlists title='md-list' />
					<Subscriptions title='ios-book' />
					<Account title='ios-person' />
				</Tabs>
			</View>
			<Player style={styles.player} />
		</View>

  	}
}
