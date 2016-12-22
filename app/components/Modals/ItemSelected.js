
import React, { Component } from 'react'
import { Modal, View, StyleSheet, Picker } from 'react-native'
import { Container, Content, Card, CardItem, ListItem, Thumbnail, Text, Icon } from 'native-base'

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	subcontainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
	modal: {
		flex: 1,
		marginTop: 124,
		marginLeft: 50,
		marginRight: 50,
	},
	button: {
		marginTop: -4,
	},
	icon : {
		color: 'red',
	},
	action: {

	},
})

let makeid = function(){
   var text = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for( var i=0; i < 10; i++ )
	   text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text;
}

export default class ItemSelected extends Component {

	constructor(props){
		super(props)
		this.state = {
			title : props.title,
			visible : props.visible,
			clicked : props.clicked,
		}
	}

	close(e){
		this.setState({visible: false})
		return;
	}

	render(){
		let key = makeid()
		return <Modal key={key} onRequestClose={()=>{return}} visible={this.state.visible} style={style.container} animationType={"slide"} transparent={true} >
			<View style={style.subcontainer}>
				<Container style={style.modal}>
		    		<Content>
						<Card>
				            <CardItem key={1} header>
				                <Text>{this.props.title}</Text>
				            </CardItem>
							<CardItem key={2} style={style.button}>
                            	<Icon name="md-play" style={style.icon} />
                            	<Text style={style.action}>Play now</Text>
                        	</CardItem>
							<CardItem key={3} style={style.button}>
                            	<Icon name="md-list" style={style.icon} />
                            	<Text style={style.action}>Add to queue</Text>
                        	</CardItem>
							<CardItem key={4} style={style.button}>
                            	<Icon name="md-add" style={style.icon} />
                            	<Text style={style.action}>Add to playlist</Text>
                        	</CardItem>
							<CardItem key={5} style={style.button}>
                            	<Icon name="md-download" style={style.icon} />
                            	<Text style={style.action}>Save for offline</Text>
                        	</CardItem>
							<CardItem key={6} onPress={this.close.bind(this)}>
                            	<Text style={{textAlign:'center'}}>Cancel</Text>
                        	</CardItem>
       					</Card>
					</Content>
				</Container>
			</View>
		</Modal>
	}
}
