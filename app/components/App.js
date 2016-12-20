
import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import Main from './Main'
import Search from './Search'

import store from '../store'

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

		return <Provider store={store}>
			<View style={{flex:1}}>
				{display}
			</View>
		</Provider>
  	}
}
