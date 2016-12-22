
import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import App from './app/components/App'

export default class youtubify extends Component {
  	render() {
    	return <View style={{flexDirection:'column',flex:1}}>
			<View style={{height:15,backgroundColor:'red'}} />
			<App style={{flex:1}}/>
    	</View>
  	}
}

AppRegistry.registerComponent('youtubify', () => youtubify)
