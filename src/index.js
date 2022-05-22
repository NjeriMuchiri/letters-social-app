import {render} from 'react-dom';
import React from 'react'; 

import App from './App';

import './shared/crash';
import './shared/service-worker';
import './shared/vendor';
import '.styles/styles.scss';

render(<App />, document.getElementById('app'));

