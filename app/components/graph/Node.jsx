import React , {PropTypes} from 'react';
export default class Node extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <circle

        cx={this.props.x}
        cy={this.props.y}
        r='15'

        />
    );
  }
}

Node.propTypes={
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired

}
