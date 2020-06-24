import React from 'react';
import '../assets/style/App.css';
import Home from './home';

import {Provider } from 'react-redux'
import configureStore from '../store/store';

const store = configureStore({});

function App() {
  return (
  	<Provider store={store}>

   
  	<div className="App">
  		<Home/>
    </div>
    </Provider>
  );
}

export default App;
