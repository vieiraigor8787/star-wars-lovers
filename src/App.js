import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Form from './components/Form'

class App extends Component {
  // default state object
  state = {
    name: '',
    films: [],
    homeworld: 0,
    error: '',
    loading: false
  };

  changeCharacter = name => {
    this.setState({ name })
  }

  render() {
    const { name, films, homeworld, error, loading } = this.state
    return (
      <div className="App">
        <Header />
        <Form 
          changeCharacter={this.changeCharacter}
          name={name}
          films={films}
          homeworld={homeworld}
          error={error}
          loading={loading}
          btnAction={() => console.log('asdasdasdas')}
        />
      </div>
    );
  }
}

export default App;
