import {connect} from 'react-redux';
import React from 'react';

import Main from '../components/Main';

class AppContainer extends React.Component{

  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    const {store} = this.context;
    const state = store.getState();
    return (
      <Main {...state}

        />
    );


  }



};

AppContainer.contextTypes = {
  store: React.PropTypes.object
};
export default AppContainer;
