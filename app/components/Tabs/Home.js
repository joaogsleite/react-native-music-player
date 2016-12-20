import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, List } from 'native-base'

import Item from '../Item'

export default class Home extends Component {
	render(){
		return <View style={{flex:1}}>
			<Container>
                <Content>
					<List>
					<Item playing={true} />
					<Item />
					<Item />
					<Item />
					<Item />
					</List>
                </Content>
            </Container>
		</View>
	}
}
