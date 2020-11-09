import React from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import Error from './Error'
import './App.css';

class App extends React.Component {
  state = {
    lat: null,
    err: ""
  };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      error => this.setState({err: error.message})
    )
  };


   render() {
    if(!this.state.err && this.state.lat){
      return (
        <SeasonDisplay lat = {this.state.lat} />
      )
    }
    if(this.state.err && !this.state.lat){
      return <div><Error msg={this.state.err}/></div>;
    }

    return <div><Spinner message= {"Please allow location access"}/></div>;
  }
}

export default App;

