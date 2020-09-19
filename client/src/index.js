import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
// import './setupProxy';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    applyMiddleware(reduxThunk)
    );

 

ReactDom.render(
    <Provider store={store}>
    <App />

    </Provider>,
    
    document.querySelector('#root')
);


