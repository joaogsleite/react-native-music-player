import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Content, Card, CardItem, Text, Button, Icon, Thumbnail } from 'native-base'

const styles = require('../styles')

export default class Home extends Component {

	handleClik(e){
		return;
	}

	render(){
		let playing = this.props.playing?{backgroundColor:'#ffffdd'}:{}
		return <Card style={[styles.card,playing]}>
			<CardItem onPress={this.handleClik.bind(this)} style={styles.carditem}>
				<Thumbnail style={styles.thumbnail} size={70} square source={{uri:'https://i.ytimg.com/vi/C-u5WLJ9Yk4/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=YH7T5D7oYViB4QxadO-H5O6eJMw'}} />
				<Text style={styles.card_text}>Britney Spears - ...Baby One More Timbaby One More Tim</Text>
				<View style={{ flexDirection: 'row'}}>
					<View style={styles.card_info} transparent textStyle={styles.card_info}>
		            	<Icon style={styles.card_info_icon} name="md-person" />
		                <Text style={styles.card_info_text}>BritneySpearsVEVO</Text>
		            </View>
					<View style={styles.card_info} transparent textStyle={styles.card_info}>
		            	<Icon style={styles.card_info_icon}  name="md-time" />
		                <Text style={styles.card_info_text}>04:33</Text>
		            </View>
				</View>
			</CardItem>
		</Card>
	}
}
