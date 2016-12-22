import React, { Component } from 'react'
import { View } from 'react-native'
import { List, ListItem, Icon, Card, CardItem, Thumbnail, Text } from 'native-base'

export default class Subscriptions extends Component {
	render(){
		return <View style={{flex:1}}>
			<List>
				<ListItem key={1}>
					<Thumbnail source={{uri:'https://yt3.ggpht.com/-RlIlmd-s60c/AAAAAAAAAAI/AAAAAAAAAAA/ARGHhCBuBjY/s176-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
					<Text style={{paddingBottom:5}}>BritneySpearsVEVO</Text>
				</ListItem>
				<ListItem key={2}>
					<Thumbnail source={{uri:'https://yt3.ggpht.com/-RlIlmd-s60c/AAAAAAAAAAI/AAAAAAAAAAA/ARGHhCBuBjY/s176-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
					<Text style={{paddingBottom:5}}>BritneySpearsVEVO</Text>
				</ListItem>
				<ListItem key={3}>
					<Thumbnail source={{uri:'https://yt3.ggpht.com/-RlIlmd-s60c/AAAAAAAAAAI/AAAAAAAAAAA/ARGHhCBuBjY/s176-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
					<Text style={{paddingBottom:5}}>BritneySpearsVEVO</Text>
				</ListItem>
				<ListItem key={4}>
					<Thumbnail source={{uri:'https://yt3.ggpht.com/-RlIlmd-s60c/AAAAAAAAAAI/AAAAAAAAAAA/ARGHhCBuBjY/s176-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
					<Text style={{paddingBottom:5}}>BritneySpearsVEVO</Text>
				</ListItem>
				<ListItem key={5}>
					<Thumbnail source={{uri:'https://yt3.ggpht.com/-RlIlmd-s60c/AAAAAAAAAAI/AAAAAAAAAAA/ARGHhCBuBjY/s176-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
					<Text style={{paddingBottom:5}}>BritneySpearsVEVO</Text>
				</ListItem>
			</List>
		</View>
	}
}
