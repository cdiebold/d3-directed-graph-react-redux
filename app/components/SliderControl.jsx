import React from 'react';

export default class SliderControl extends React.Component{

render(){
  let control = this.props.control;
  return (
    <div>
      <h4>{control.controlName}</h4>
      <input type='range' min={control.min} max={control.max}
        step={control.step}/>
    </div>
  );

}

}
