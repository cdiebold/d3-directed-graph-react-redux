import React from 'react';
import * as d3 from 'd3';
import data from '../sample_data/miserables';

import Nodes from '../components/graph/Nodes';
import Edges from '../components/graph/Edges';

export default class DirectedGraph extends React.Component{

  componentDidMount(){
    // const {store} this.context;
    // const {width, height} = this.props;
    // const forceGraph = d3.forceSimulation()
    //   .force('link', d3.forceLink().id(function(d){ return d.id; }))
    //   .force('charge', d3.forceManyBody())
    //   .force('center', d3.forceCenter(width/2, height/2))
    //
    //   console.log(Object.keys(forceGraph));
    //   console.log('data', data);
    //   console.log('nodes', data.nodes[0])
    //   console.log('edges', data.links[0]);
  }

  render(){
    const {width, height} = this.props;
    const style = {
      width, height,
      border: '1px solid #323232',
    };

    return (
      <div style={style}>
        <svg width={width} height={height}>

        </svg>
      </div>
    );
  }
}
