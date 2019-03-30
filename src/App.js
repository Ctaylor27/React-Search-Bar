import React, { Component } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar/SearchBar';
import UserCard from './Component/UserCard/UserCard';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    input: "",
  }

  componentDidMount()  {
    axios.get('https://randomuser.me/api/?results=5').then( response => {
      console.log(response)
      const users = response.data.results;
      this.setState({users: users});
    })
  }

  updateInputHandler = (event) => {
    this.setState({input: event.target.value});
  }

  render() {
    const userCards = this.state.users.map(user => {
      const regex = new RegExp(this.state.input)
      if (this.state.input === ""){
        return (
          <UserCard 
            email={user.email}
            location={user.location.city + ", " + user.location.state}
            thumbnail={user.picture.large}
            key={user.login.uuid} 
            name={user.name.first + " " + user.name.last} />
        )
      } else if (regex.test(user.name.first) || regex.test(user.name.last)) {
        return (
          <UserCard 
            email={user.email}
            location={user.location.city + ", " + user.location.state}
            thumbnail={user.picture.large}
            key={user.login.uuid} 
            name={user.name.first + " " + user.name.last} />
        )
      }
    })
    return (
      <div className="App">
        <SearchBar changed={this.updateInputHandler}/>
        <div className="UserContainer">
          {userCards}
        </div>
      </div>
    );
  }
}

export default App;
