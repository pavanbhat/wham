import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }
  render() {

    return (
      <div>
        <h1 align="center">WHAM!</h1>
        <form>
          <fieldset>
            <legend>Your Address:  </legend>
            <input id="locSearch" type="text" name="locSearch" placeholder="eg: New York" />
            </fieldset>
        </form>
      </div>

    );
  }
}

export default App;
