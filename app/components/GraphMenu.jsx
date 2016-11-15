import React from 'react';

export default class GraphMenu extends React.Component{

  constructor(){
    super()
     this.menuTitle = 'Directed Graph';
     this.buttonTitle = 'Controls';
  }

  render(){
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu vertical'>
            <li className='menu-text'>{this.menuTitle}</li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <ul className='menu'>
            <li><button type='button' className='button'>{this.buttonTitle}</button></li>
          </ul>
        </div>
      </div>
    );
  }
}
