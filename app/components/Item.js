import React, { Component } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { Container, Content, Card, CardItem, ListItem, Thumbnail, Text, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux'

import { playNewVideo } from '../actions/player'
import { modal } from '../actions/routes'

Animation = Animatable.createAnimatableComponent(Container)

const style = StyleSheet.create({
	text: { height: 43 },
	icon : { fontSize: 18, color: '#444' },
	notes: {
		marginTop: 5,
		flexDirection: 'row',
	},
	note: {
		fontSize: 25,
		marginRight: 20,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	subcontainer: {
		flex: 1,
		flexDirection: 'row',
	},
	modal: {
		flex: 1,
		marginTop: 124,
		marginLeft: 50,
		marginRight: 50,
	},
	button: { marginTop: -4 },
	option_icon : { color: 'red' }
})

@connect()
export default class Item extends Component {

	constructor(props){
		super(props)
		this.state = {
			modal : false
		}
	}
	openModal(){
		this.setState({modal:true})
		this.props.dispatch(modal(true))
	}
	closeModal(){
		this.setState({modal:false})
		this.props.dispatch(modal(false))
	}

	play(e){
		let time = this.props.duration.split(':')
		let duration = 0
		let k=0
		for(let i=time.length-1; i>=0; i--){
			if(k==2) duration += parseInt(time[i])*3600
			if(k==1) duration += parseInt(time[i])*60
			if(k==0) duration += parseInt(time[i])
			k++
		}
		this.closeModal()
		this.props.dispatch(playNewVideo(this.props.id,this.props.title,duration))
	}

	render(){
		let playing = this.props.playing?{backgroundColor:'#ffffdd'}:{}
		return <ListItem onPress={this.openModal.bind(this)}>

			<Thumbnail square size={70} source={{uri:'https://img.youtube.com/vi/'+this.props.id+'/mqdefault.jpg'}} />
            <Text style={style.text}>{this.props.title}</Text>
            <View style={style.notes}>
				<Text style={style.note}>
					<Icon style={style.icon} name="md-time" />
					<Text> {this.props.duration}</Text>
				</Text>
				<Text style={style.note}>
					<Icon style={style.icon} name="md-person" />
					<Text> {this.props.uploader}</Text>
				</Text>
			</View>

			<Modal onRequestClose={()=>{return}} visible={this.state.modal} animationType={"slide"} transparent={true} >
				<View style={style.modal} >
						<Content>
							<Card>
					            <CardItem key={1} header>
					                <Text>{this.props.title}</Text>
					            </CardItem>
								<CardItem key={2} style={style.button} onPress={this.play.bind(this)}>
	                            	<Icon name="md-play" style={style.option_icon} />
	                            	<Text style={style.action}>Play now</Text>
	                        	</CardItem>
								<CardItem key={3} style={style.button}>
	                            	<Icon name="md-list" style={style.option_icon} />
	                            	<Text style={style.action}>Add to queue</Text>
	                        	</CardItem>
								<CardItem key={4} style={style.button}>
	                            	<Icon name="md-add" style={style.option_icon} />
	                            	<Text style={style.action}>Add to playlist</Text>
	                        	</CardItem>
								<CardItem key={5} style={style.button}>
	                            	<Icon name="md-download" style={style.option_icon} />
	                            	<Text style={style.action}>Save for offline</Text>
	                        	</CardItem>
								<CardItem key={6} onPress={this.closeModal.bind(this)}>
	                            	<Text style={{textAlign:'center'}}>Cancel</Text>
	                        	</CardItem>
	       					</Card>
						</Content>
					</View>
			</Modal>

        </ListItem>

	}
}
