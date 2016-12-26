import {combineReducers} from 'redux'

import user from './user'
import routes from './routes'
import player from './player'

export default combineReducers({
    user,
	routes,
	player
})
