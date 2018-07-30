import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import NavBar from './landing';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >

        <NavBar />

        <Route path="/" exact={true} component={Landing} />
        <Route path="/hms" component={HMS} />
        <Route path="/med" component={MED} />
        <Route path="/financial" component={$$$} />

      </div>
    );
  }
}

const Landing = (props) => {
  return(
    <h1>This is the landing page, freaking awesome!</h1>
  );
}

const HMS = (props) => {
  return(
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

const MED = (props) => {
  return(
    <div>
      <h1>I'm Rick! Nice to meet you!</h1>
    </div>
  );
}
const formatAsLink = (toUrl, name) => {
  return(
    <li><Link to={toUrl}>{name}</Link></li>
  );
}
const $$$ = (props) => {
  console.log(props);
  let allPuppies = [
    'Chipper',
    'Max',
    'Rascal',
    'Kato'
  ];
  return(
    <div>
      <h1>Puppies are awesome!</h1>
      <ul>
        {allPuppies.map(puppy => formatAsLink(`${props.match.url}/${puppy}`, puppy))}
      </ul>
    </div>
  );
}

export default App;