import { createStore } from 'redux';
<<<<<<< Updated upstream
import contactsReducer from './contactsReducer';

const store = createStore(contactsReducer);
=======
import {composeWithDevTools} from 'redux-devtools-extension'
import contactsReducer from './contactsReducer';

const store = createStore(contactsReducer,composeWithDevTools());
>>>>>>> Stashed changes

export default store;