import React, { Component } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import { connect } from 'react-redux'

import {changeTab } from '../../../../actions/routes'

import { Icon } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

@connect()
export default class Tabs extends Component {

	constructor(props){
		super(props)
		this.routes = []
		this.state = {
	    	index: 0,
	      	routes: this.props.children.map((elem, k)=>{
				this.routes[k] = elem.props.title
				return {key: (k+1)+'', title:elem.props.title, icon:elem.props.icon }
			}),
	    }
	}

  	handleChangeTab(index){
		this.props.dispatch(changeTab(this.routes[index]))
    	this.setState({ index });
		return;
  	}

	renderIcon({ route }){
		return <Icon style={{color:'white'}} name={route.icon} />
	}
	renderLabel({ route }){
		return;
	}

  	renderHeader(props){
    	return <TabBar renderLabel={this.renderLabel} renderIcon={this.renderIcon} style={{backgroundColor:'red'}} {...props} />;
  	}

  	renderScene({ route }){
		return <View style={{flex:1}} >
			{this.props.children[route.key-1]}
		</View>
  	}

  	render(scene) {
    	return <TabViewAnimated
        	style={styles.container}
        	navigationState={this.state}
        	renderScene={this.renderScene.bind(this)}
        	renderHeader={this.renderHeader.bind(this)}
        	onRequestChangeTab={this.handleChangeTab.bind(this)}
      	/>
  	}
}
