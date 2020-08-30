import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';

export default class App extends Component {
  
  render(){
    return (
      <div className="app">
        <Header/>
        <Content/>
      </div>
    );
  }
  
}