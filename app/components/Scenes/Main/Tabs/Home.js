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
						<Item key={1} id='LOZuxwVk7TU' duration='3:31' uploader='BritneySpearsVEVO' title='Britney Spears - Toxic (Official Video)' />
						<Item key={2} id='C-u5WLJ9Yk4' duration='3:56' uploader='BritneySpearsVEVO' title='Britney Spears - ...Baby One More Time' />
						<Item key={3} id='fKnahHYaC14' duration='2:59' uploader='ThemFlyingMonkeysVEVO' title='Them Flying Monkeys - Molly' />
						<Item key={4} id='Pwt8hk3ADTk' duration='2:04:44' uploader='BillMokas' title='Smooth Jazz Chill Out Lounge [2015]' />
						<Item key={5} id='hyzApwt2d8s' duration='01:03:22' uploader='TheVibeGuide' title='The Vibe Guide Christmas Chill Mix' />
					</List>
                </Content>
            </Container>
		</View>
	}
}
