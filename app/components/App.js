
import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider, connect } from 'react-redux'
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';

import store from '../store'

const RouterWithRedux = connect()(Router);

import Main from './Scenes/Main'
import Search from './Scenes/Search'
import Playlist from './Scenes/Playlist'

import ItemSelected from './Modals/ItemSelected'

export default class App extends Component {

  	render() {
		StatusBar.setBarStyle('light-content', true);

		return <Provider store={store}>
			<RouterWithRedux>
				<Scene key="modal" component={Modal} >
				<Scene key="root" hideNavBar={true}>
					<Scene key="home" component={Main} title="Home" />
					<Scene key="playlist" component={Playlist} title="Home" />
					<Scene duration={0} key="search" component={Search} title="Search"/>
	      		</Scene>
				<Scene key="selectItem" component={ItemSelected} />
				</Scene>
			</RouterWithRedux>
		</Provider>
  	}
}
