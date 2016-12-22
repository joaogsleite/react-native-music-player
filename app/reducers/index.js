import {combineReducers} from 'redux'

import user from './user'
import routes from './routes'

export default combineReducers({
    user,
	routes
})
