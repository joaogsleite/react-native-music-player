import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon, List, ListItem, Text, Badge  } from 'native-base'

export default class Playlists extends Component {
	render(){
		return <View style={{flex:1}}>
			<List>
                <ListItem iconLeft>
                    <Icon name="md-list" style={{ color: '#656565' }} />
                    <Text>Example Playlist Name</Text>
					<Badge style={{ backgroundColor: '#656565' }}>2</Badge>
                </ListItem>
				<ListItem iconLeft>
                    <Icon name="md-list" style={{ color: '#656565' }} />
                    <Text>Other Playlist</Text>
					<Badge style={{ backgroundColor: '#656565' }}>5</Badge>
                </ListItem>
				<ListItem iconLeft>
                    <Icon name="md-list" style={{ color: '#656565' }} />
                    <Text>Senta cão</Text>
					<Badge style={{ backgroundColor: '#656565' }}>32</Badge>
                </ListItem>
            </List>

		</View>
	}
}
