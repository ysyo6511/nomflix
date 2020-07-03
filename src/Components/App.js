import React, {Component} from 'react';
import Router from "./Router";
import GloblaStyles from './GlobalStyled';

class App extends Component {
  render() {
    return (
    <>
    <Router />
    <GloblaStyles />
    </>
    )
  }
}

export default App;
