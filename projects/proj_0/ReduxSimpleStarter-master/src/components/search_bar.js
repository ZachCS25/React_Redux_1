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
  // all JS classes have a constructor fired upon instance instantiation
  constructor(props) {
    // this is how to initialize state in a class-based component
    super(props); // super is the constructor for Component (the superclass)
    // we init state by creating a new obj and setting to this.state
    // the object passed contains props that we want to record on the state
    this.state = { term: '' }; // using term for searchTerm
  }
  // every react component must have a render method
  // every render method must return some JSX
  render() {
    // this makes use of vanilla js event 'change'
    // add attribute 'on<VanillaEventName>={methodToRun}'
    // more of these event names in React docs
    // this attaches the event handler to event on below input

    // return <input onChange={this.onInputChange} />;

    // below is ES6 shortcut adding the event handler
    // never modify state directly (USE SETTER!!!)
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  // our event handler for detecting text
  // event is event obj from browser event on element
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
}

export default SearchBar;
// any file that imports SearchBar gets Searchbar component
