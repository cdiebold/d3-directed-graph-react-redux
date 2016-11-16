import React , {PropTypes} from 'react';

import Edge from './Edge';

export default class Edges extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <g>
        {edges.map(edge=>
        <Edge key={edge.id}
        {...edge}
        />
    )}
      </g>
    );
  }
}
