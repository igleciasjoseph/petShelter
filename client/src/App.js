import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Display from './components/Display';
import Edit from './components/Edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route path="/new" component={Form} />
          <Route exact path="/pet/:_id" component={Display} />
          <Route path="/pet/:_id/edit" component={Edit} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
