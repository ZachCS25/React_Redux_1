import React from 'react'; // for creating new components
import ReactDOM from 'react-dom'; // for adding component to DOM

import YOUTUBE_API_KEY from './settings.js';

// 1. create a new component that should produce some HTML
const App = () => { // const is ES6 syntax for declaring a constant
  return <div>Hi!</div>; // JSX dialect of JS that allows HTMLish inside
}  // App is a class, not an instance!!!
   // this function is like a factory for producing instances to get rendered
   // => is ES6 for function keyword before the ()

// 2. need to take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
// first arg is JSX instance, 2nd arg is existing HTML node to render to
// putting a JSX tag around class turns it to instance
// when wrap a class (like App) with JSX tags (<App />) it becomes an instance
