
import { ActionConst } from 'react-native-router-flux';

const initialState = {
	scene: {},
	tab: 'Home',
	modal : false,
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
    	// focus action is dispatched when a new screen comes into focus
    	case ActionConst.FOCUS:
      		return { ...state, scene: action.scene }

    	// ...other actions
		case 'CHANGE_TAB':
			return { ...state, tab: action.payload }

		case 'MODAL':
			return { ...state, modal: action.payload }

    	default:
      		return state;
  	}
}
