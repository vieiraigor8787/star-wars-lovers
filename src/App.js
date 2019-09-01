import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'
import Characters from './components/Characters'

class App extends Component {
  // default state object
  state = {
    isLoading: true,
    users: [],
    error: null
  }

  fetchUsers() {
    fetch(`https://gist.githubusercontent.com/vieiraigor8787/bec09ae47f4f349c650ac170d8e80e8f/raw/602de7b520e044799bbfdf3949cb7fbb57330527/people.json`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <Header/>
        <Form />
        <div className="container">
        <h2>Personagens da saga:</h2>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { id, name, homeworld, films } = user;
            return (
              <div key={id} className="row mx-auto border mt-1">
                <a href="" className="col ">{name} </a>
                <p className="col ">  Homeworld: {homeworld} </p> 
                <p className="col"> {films.length} filme(s) </p>
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
