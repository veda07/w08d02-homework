import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import PokemonContainer from './PokemonContainer/PokemonContainer'


class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Login to Find Your Pokemon!</h1>
        {
          this.state.loggedIn === true ?
         <PokemonContainer></PokemonContainer>
        :
          <LoginForm handleLogin = {this.handleLogin} ></LoginForm>
        }
        
      </div>
    );
  }
}
export default App;
