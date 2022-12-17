//Store is the object where the state is kept.
import thunk from 'redux-thunk'

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';
import rickMortyReducer from "../reducers/rickMortyReducer";

const rootReducer = combineReducers({

    rickMorty: rickMortyReducer,
    // users: usersReducer,
    // messages: messagesReducer,

})

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store