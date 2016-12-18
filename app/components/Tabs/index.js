import React, { Component } from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'

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

export default class Tabs extends Component {
	constructor(props){
		super(props)
		this.state = {
	    	index: 0,
	      	routes: this.props.children.map((elem, k)=>{
				return {key: (k+1)+'', title:elem.props.title}
			}),
	    }
	}


  	handleChangeTab(index){
    	this.setState({ index });
  	}

	renderIcon({ route }){
		return <Icon style={{color:'white'}} name={route.title} />
	}
	renderLabel({ route }){
		return ;
	}

  	renderHeader(props){
    	return <TabBar renderLabel={this.renderLabel} renderIcon={this.renderIcon} style={{backgroundColor:'red'}} {...props} />;
  	}

  	renderScene({ route }){
		return <View style={{flex:1,paddingTop:3, paddingLeft: 7, paddingRight:7}} >
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
