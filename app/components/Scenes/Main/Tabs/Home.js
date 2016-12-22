import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, List } from 'native-base'

import Item from '../../../Item'

export default class Home extends Component {
	render(){
		return <View style={{flex:1}}>
			<Container>
                <Content>
					<List>
						<Item key={1} title="Britney Spears - Toxic (Official Video)" />
						<Item key={2} title="Britney Spears - Oops!...I Did It Again (Official Video)" />
						<Item key={3} title="Britney Spears - Make Me... (Audio) ft. G-Eazy" />
						<Item key={4} title="Britney Spears - Toxic (Official Video)" />
						<Item key={5} title="Britney Spears - Oops!...I Did It Again (Official Video)" />
						<Item key={6} title="Britney Spears - Make Me... (Audio) ft. G-Eazy" />
						<Item key={7} title="Britney Spears - Toxic (Official Video)" />
					</List>
                </Content>
            </Container>
		</View>
	}
}
