import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';


// Load foundation css framework
// uses webpack style injector that is what the style!css! part of the string is
require('style!css!foundation-sites/dist/foundation.min.css')

//use jquery to inject foundation into the application
$(document).foundation();
// allow application custom styling
// applicationStyles is an alias in the webpack configuration file
require('style!css!applicationStyles')

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
