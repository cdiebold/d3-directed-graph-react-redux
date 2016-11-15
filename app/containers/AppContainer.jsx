import {connect} from 'react-redux';
import React from 'react';

import GraphMenu from '../components/GraphMenu';
import ControlPanel from '../components/ControlPanel';
import TopicList from '../components/TopicList';
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
          <TopicList/>
        </div>

      </div>
    );


  }



};

// AppContainer.contextTypes = {
//   store: React.PropTypes.object
// };
export default AppContainer;
