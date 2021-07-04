import React, { Component } from 'react';
import HomePage from './components/homePage/homePage';
import Header from './components/header/header';
import { Provider } from 'react-redux'
import { store } from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartPage from './components/cart/cartPage';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     greeting: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`api/greeting?name=${encodeURIComponent(this.state.name)}`)
  //     .then(response => response.json())
  //     .then(state => this.setState(state));
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
        </header> */}
            <Header />
            <Switch>
              <Route path={"/"} exact component={HomePage}/>
              <Route path={"/cart"} component={CartPage}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;