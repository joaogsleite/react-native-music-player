
import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { Icon, Button } from 'native-base'

let styles = require('../styles')

export default class Search extends Component {

  	render() {
		return <View style={styles.container}>
			<View style={[styles.header,{height:60, flexDirection:'row'  }]}>
				<TextInput autoFocus={true} ref='Input' style={styles.search} placeholder="Search..." />
				<Button transparent onPress={this.props.search} style={styles.button}>
					<Icon name='ios-close' style={styles.icon} />
				</Button>
			</View>
		</View>
	}
}
