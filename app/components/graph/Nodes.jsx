import React , {PropTypes} from 'react';
import Node from './Node';

export default class Nodes extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <g>
        {nodes.map(node =>
        <Node key={node.id}
        {...node}
        />
    )}
      </g>
    );
  }
}
