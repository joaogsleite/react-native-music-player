import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'

import Item from '../Item'

export default class Home extends Component {
	render(){
		return <View style={{flex:1}}>
			<Container>
                <Content>
					<Item playing={true} />
					<Item />
					<Item />
					<Item />
					<Item />
                </Content>
            </Container>
		</View>
	}
}
