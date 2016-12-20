import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ListItem, Thumbnail, Text, Icon } from 'native-base'

const style = StyleSheet.create({
	text: {
		height: 43,
	},
	icon : {
		fontSize: 18,
		color: '#444',
	},
	notes: {
		marginTop: 5,
		flexDirection: 'row',
	},
	note: {
		fontSize: 25,
		marginRight: 20,
	}
})

export default class Home extends Component {

	handleClik(e){
		return;
	}

	render(){
		let playing = this.props.playing?{backgroundColor:'#ffffdd'}:{}
		return <ListItem>
    		<Thumbnail square size={70} source={{uri:'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=GNa8_rh4DM-P9DT_vW-WlKr7mM0'}} />
            <Text style={style.text}>Adele - HelloAdele - HelloAdele - Hello</Text>
            <View style={style.notes}>
				<Text style={style.note}>
					<Icon style={style.icon} name="md-time" />
					<Text> 4:33</Text>
				</Text>
				<Text style={style.note}>
					<Icon style={style.icon} name="md-person" />
					<Text> AdeleVEVO</Text>
				</Text>
			</View>
        </ListItem>



		/*<Card style={[styles.card,playing]}>
			<CardItem onPress={this.handleClik.bind(this)} style={styles.carditem}>
				<Thumbnail style={styles.thumbnail} size={70} square source={{uri:'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg?custom=true&w=336&h=188&stc=true&jpg444=true&jpgq=90&sp=68&sigh=GNa8_rh4DM-P9DT_vW-WlKr7mM0'}} />
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
		</Card>*/
	}
}
