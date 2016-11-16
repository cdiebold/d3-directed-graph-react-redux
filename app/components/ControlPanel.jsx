import React from 'react';
import SliderControl from './SliderControl';

export default class ControlPanel extends React.Component{

  render(){
    var control = [
      {
        controlName: 'Zoom',
        min: 1,
        max: 10,
        step: 1
      },
      {
        controlName: 'Gravity',
        min: 1,
        max: 10,
        step: 1
      },
      {
        controlName: 'Link Distance',
        min: 1,
        max: 10,
        step: 1
      }

    ];
    return (
      <div className='callout large'>
        <div className='row'>
          <div className='small-4 columns'>
              <SliderControl control={control[0]}/>
          </div>
          <div className='small-4 columns'>
              <SliderControl control={control[1]}/>
          </div>
          <div className='small-4 columns'>
                <SliderControl control={control[2]}/>
          </div>
        </div>
      </div>
    );
  }
}
