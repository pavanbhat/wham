import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  // var locationForm = document.getElementById('search');
  //
  // // Adding a form listener
  // locationForm.addEventListener('submit', geocode);


  render() {

    return (
      <div>
          <h1 id="titleText">WHAM!</h1>
          <div className="wrap">
             <form className="search">
                <input id="locSearch" type="text" className="searchLocation" placeholder="Where are you currently?" />
                <button type="submit" id="searchButton">
                  <i className="fa fa-search"></i>
               </button>
             </form>
          </div>
      </div>

    );
  }
}

export default App;
