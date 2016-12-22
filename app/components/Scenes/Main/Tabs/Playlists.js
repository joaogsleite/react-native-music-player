import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon, List, ListItem, Text, Badge  } from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class Playlists extends Component {
	playlist(e){
		Actions.playlist()
		return;
	}
	render(){
		return <View style={{flex:1}}>
			<List>
                <ListItem key={1} iconLeft onPress={this.playlist.bind(this)}>
                    <Icon name="md-list" style={{ color: '#656565' }} />
                    <Text>Example Playlist Name</Text>
					<Badge style={{ backgroundColor: '#656565' }}>2</Badge>
                </ListItem>
				<ListItem key={2} iconLeft>
                    <Icon name="md-list" style={{ color: '#656565' }} />
                    <Text>Other Playlist</Text>
					<Badge style={{ backgroundColor: '#656565' }}>5</Badge>
                </ListItem>
				<ListItem key={3} iconLeft>
                    <Icon name="md-list" style={{ color: '#656565' }} />
                    <Text>Senta cão</Text>
					<Badge style={{ backgroundColor: '#656565' }}>32</Badge>
                </ListItem>
            </List>

		</View>
	}
}
