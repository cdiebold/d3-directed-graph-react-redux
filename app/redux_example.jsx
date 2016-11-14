import Redux from 'redux';

var reducer = (action, state) => {
  state = state || {name: 'Chris'};
};

var store = redux.createStore(reducer);

var currentState = store.getState();
