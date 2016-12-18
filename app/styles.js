
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
	button: {
		width:90,
	},
	search: {
		color: 'white',
		paddingLeft: 30,
		flex:1,
		fontSize: 17,
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
