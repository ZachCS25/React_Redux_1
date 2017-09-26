// import React from 'react';
// we still use this import.  Remember that <input /> is the same as calling
// React.createElement(...);

//ES6 syntax, import React and get Component and set name
import React, { Component } from 'react';

// const SearchBar = () => { // functional component
//   return <input />;
// };

// class based component:
class SearchBar extends Component {
  // every react component must have a render method
  // every render method must return some JSX
  render() {
    // this makes use of vanilla js event 'change'
    // add attribute 'on<VanillaEventName>={methodToRun}'
    // more of these event names in React docs
    // this attaches the event handler to event on below input

    // return <input onChange={this.onInputChange} />;

    // below is ES6 shortcut adding the event handler
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // our event handler for detecting text
  // event is event obj from browser event on element
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
}

export default SearchBar;
// any file that imports SearchBar gets Searchbar component
