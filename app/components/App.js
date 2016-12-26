
import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider, connect } from 'react-redux'
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';

import store from '../store'

const RouterWithRedux = connect()(Router);

import Main from './Scenes/Main'
import Search from './Scenes/Search'
import Playlist from './Scenes/Playlist'

import MainContainer from './MainContainer'
import Player from './Player'

export default class App extends Component {

  	render() {
		StatusBar.setBarStyle('light-content', true);

		return <Provider store={store}>
				<View style={{flex:1,backgroundColor:'black'}}>
				<MainContainer>
				<View style={{flex:5}}>
					<RouterWithRedux>
						<Scene key="root" hideNavBar={true}>
							<Scene key="home" component={Main} title="Home" />
							<Scene key="playlist" component={Playlist} title="Home" />
							<Scene duration={0} key="search" component={Search} title="Search"/>
			      		</Scene>
					</RouterWithRedux>
				</View>
				<View style={{flex:1}}>
					<Player />
				</View>
				</MainContainer>
				</View>
			</Provider>
  	}
}
