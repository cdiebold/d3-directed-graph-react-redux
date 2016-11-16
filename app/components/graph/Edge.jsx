import React , {PropTypes} from 'react';

export default class Edge extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <line
        stroke-width={2}
        x1={this.props.x1}
        y1={this.props.y1}
        x2={this.props.x2}
        y2={this.props.y2}
        />
    );
  }
}

Edge.propTypes={
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
}
