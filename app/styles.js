
import { StyleSheet } from 'react-native'

module.exports =  StyleSheet.create({
	header: {
		backgroundColor: 'red',
		height: 56,
		flexDirection: 'row',
		paddingTop: 0,
		justifyContent: 'space-between'
	},
	title: {
		color: 'white',
		fontSize: 20,
		paddingLeft: 20,
		fontWeight: 'bold',
		paddingTop: 14
	},
	thumbnail: {
		paddingRight: 10,
		paddingTop: 0,
		marginTop: 5,
	},
	card : {
		marginTop: 7,
	},
	carditem: {
		paddingTop: 0,
		paddingLeft: 7,
		paddingBottom: 3,
	},
	card_text: {
		paddingTop: 0,
		paddingBottom: 0,
		marginBottom:0,
		marginTop: 0,
		fontSize: 15,
	},
	card_info: {
		marginTop: 0,
		flexDirection: 'row',
		paddingLeft: 0,
		marginRight: 10,
		paddingBottom: 7,
	},
	card_info_icon: {
		color: '#656565',
		flexDirection: 'row',
		paddingLeft: 0,
		marginRight: 5,
		fontSize: 15,
		paddingTop: 8,
		fontSize: 17,
	},
	card_info_text: {
		color: '#656565',
		flexDirection: 'row',
		paddingLeft: 0,
		marginRight: 10,
		fontSize: 15,
		paddingTop: 0,
		fontSize: 13,
	},
	button: {
		width:90,
	},
	search: {
		color: 'white',
		paddingLeft: 30,
		flex:1,
		fontSize: 17,
		borderBottomWidth: 0,
	},
	icon: {
		color: 'white',
		fontSize: 28,
		paddingTop: 18
	},
	container: { flex: 1 },
	tabs : { flex: 5 },
	player: { flex: 1 }
})
