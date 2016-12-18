import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base'

export default class Home extends Component {
	render(){
		return <Card>
			<CardItem>
				<Thumbnail size={50} square source={{uri:'https://i.ytimg.com/vi/C-u5WLJ9Yk4/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=YH7T5D7oYViB4QxadO-H5O6eJMw'}} />
				<Text>NativeBase</Text>
	            <Text note>Autor</Text>
			</CardItem>
		</Card>
	}
}
