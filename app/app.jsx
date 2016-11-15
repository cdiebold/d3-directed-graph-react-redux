import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { select as d3Select } from 'd3';
import { connect } from 'react-redux';

// import particlesApp from './reducers';
import AppContainer from './containers/AppContainer';
// import { resizeScreen } from './actions';

//let store = createStore(particlesApp);
//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
//application css
require('style!css!sass!applicationStyles')
ReactDOM.render(
    // <Provider store={store}>
    //     <AppContainer />
    // </Provider>,
    <AppContainer/>,
    document.getElementById('app')
);
