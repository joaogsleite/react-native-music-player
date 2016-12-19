import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon,CardItem,Card,Thumbnail,Text,List,ListItem } from 'native-base'

export default class Account extends Component {
	render(){
		return <View style={{flex:1}}>
			<View style={{backgroundColor:'#eeeeee', height:150, flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
				<Thumbnail size={80} source={{uri:'https://yt3.ggpht.com/-HAhsujc4NHw/AAAAAAAAAAI/AAAAAAAAAAA/TqJlh_vAbks/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'}} />
                <Text style={{marginTop:5}}>João Leite</Text>
			</View>
			<List>
				<ListItem iconLeft>
					<Icon name="ios-clock" style={{ color: '#656565' }} />
					<Text>History</Text>
				</ListItem>
				<ListItem iconLeft>
					<Icon name="md-stats" style={{ color: '#656565' }} />
					<Text>Statistics</Text>
				</ListItem>
				<ListItem iconLeft>
					<Icon name="md-film" style={{ color: '#656565' }} />
					<Text>My videos</Text>
				</ListItem>
				<ListItem iconLeft>
					<Icon name="md-person" style={{ color: '#656565' }} />
					<Text>Sign out</Text>
				</ListItem>
			</List>

		</View>
	}
}
