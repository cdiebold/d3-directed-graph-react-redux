import React from 'react';


class Main extends React.Component {
  componentDidMount(){
    let svg = d3.select(this.refs.svgWrap);

    svg.on('mousemove', () =>  {
      this.updateMousePosition();
    });
  }


  updateMousePosition(){
    let [x,y] = d3.mouse(this.refs.svgWrap);
    this.props.updateMousePosition(x,y);
  }

  render() {
    return (
      <svg width={this.props.svgWidth} height={this.props.svgHeight}></svg>
      // <div style={{width: this.props.scgWidth,
      //               height: this.props.svhHeight,
      //             position: 'absolute',
      //           ref="svgWrap"}}
      //           >
      //   <svg width={this.props.svgWidth} height={this.props.svgHeight}></svg>
      // </div>
    );
  }

}



Main.propTypes = {
    svgWidth: PropTypes.number.isRequired,
    svgHeight: PropTypes.number.isRequired,
    // startTicker: PropTypes.func.isRequired,
    // startParticles: PropTypes.func.isRequired,
    // stopParticles: PropTypes.func.isRequired,
    updateMousePos: PropTypes.func.isRequired
};
