
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

@connect((store)=>{
	return {
		modal : store.routes.modal
	}
})
export default class Header extends Component {
	render(){
		return <View style={{opacity:this.props.modal?0.2:1,flex:1}}>
			{this.props.children}
		</View>
	}
}
