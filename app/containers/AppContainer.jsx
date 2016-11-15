import {connect} from 'react-redux';
import React from 'react';

import GraphMenu from '../components/GraphMenu';
import ControlPanel from '../components/ControlPanel';

class AppContainer extends React.Component{

  // componentDidMount(){
  //   const {store} = this.context;
  //   this.unsubscribe = store.subscribe(() =>
  //     this.forceUpdate()
  //   );
  // }
  // componentWillUnmount(){
  //   this.unsubscribe();
  // }

  render(){
    //const {store} = this.context;
  //  const state = store.getState();
    return (
      <div className='row'>
        <div className='small-8 columns'>
          <GraphMenu/>
          <ControlPanel/>
        </div>
        <div className='small-4 columns'>
          <h4> topics</h4>
        </div>

      </div>
    );


  }



};

// AppContainer.contextTypes = {
//   store: React.PropTypes.object
// };
export default AppContainer;
