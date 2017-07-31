import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: {newyork: 'Go Knicks!', dallas: 'Go Mavericks!'},
            cityName: "",
            matchedCity: ''
        }
    }

    getTeam(cityName) {
        if (this.state.teams[cityName]) {
            return this.state.teams[cityName]
        } else if (this.state.cityName.length > 0 && !this.state.teams[cityName]) {
            return `${this.state.cityName}? Never heard of it`
        }
    }

  render() {
    return (
      <div className="App">
          <form>
              <input type="text" onChange={(event) => this.setState({cityName: event.target.value.replace(/\s/g,'').toLowerCase()})}/>
              <input type="submit" />
          </form>
          <p>{this.getTeam(this.state.cityName)}</p>

      </div>
    );
  }
}

export default App;

// take in input field convert to lowercase
// match against teams object
// if there is a match grab the value and render on screen