import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      picture:'',
      friends:[]
    }
  }

  handlePictureChange(e) {
    let picture = e.target.value
    this.setState({
      picture: picture
    })
  }

  handleNameChange(e) {
    let name = e.target.value
    this.setState({
      name: name
    })
  }

  handleClick() {
    let {name, picture} = this.state
    let friend = {
      name: name,
      picture: picture
    }
    let friends = this.state.friends
    friends.push(friend)

    this.setState({
      friends: friends
    })
  }

  render() {
    return (
      <div>
        <label>Picture</label>
        <input type="" onChange={e => this.handlePictureChange(e)}></input>
        <label>Name</label>
        <input type="" onChange={e => this.handleNameChange(e)}></input>
        <button onClick={() => this.handleClick()}>Add Friend</button>
        {this.state.friends.map((friend) => {
          return (

            <div>
              <h2>{friend.name}</h2>
              <img height={200} width={200} src={friend.picture} alt=""></img>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
