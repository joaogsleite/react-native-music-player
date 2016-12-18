
import React, { Component } from 'react'
import { View } from 'react-native'

import Main from './Main'
import Search from './Search'


export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			search : false
		}
	}
	search(e){
		this.setState({search: !this.state.search})
	}
  	render() {

		let display = this.state.search?<Search search={this.search.bind(this)} />:<Main search={this.search.bind(this)} />

		return <View style={{flex:1}}>
			{display}
		</View>
  	}
}
