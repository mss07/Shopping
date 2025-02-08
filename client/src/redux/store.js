import { createStore, combineReducers , applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getProductReducer, getProductDetailsReducer} from './reducers/productReducer';


const reducer = combineReducers({

    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
   
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store ;




//NICHA HAI USKA CODE UPPER MERA
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// // import { cartReducer } from './reducers/cartReducer';
// import { getProductReducer } from './reducers/productReducer';

// const reducer = combineReducers({

//     getProducts: getProductReducer
// })


// const middleware = [thunk];

// const store = createStore(
//     reducer, 
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;






// import { applyMiddleware, createStore, combineReducers } from 'redux'; 
// import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { getProductReducer, getProductDetailsReducer } from './reducers/productReducer';

// const reducer = combineReducers({
//     getProducts: getProductReducer,
//     getProductDetails: getProductDetailsReducer
// });

// const middleware = [thunk];

// // Use Redux DevTools properly
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(...middleware))
// );

// window.store = store;  // Make store available in console

// export default store;

