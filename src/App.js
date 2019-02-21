import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoModel from './components/TodoModel';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <TodoModel/>
            <Footer/>
        </div>
    );
  }
}

export default App;
