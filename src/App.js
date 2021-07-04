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
import { HashRouter } from 'react-router-dom';
import CartPage from './components/cart/cartPage';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path={'/'} exact component={HomePage} />
              <Route path={"/homepage"} component={HomePage} />
              <Route path={"/cart"} component={CartPage} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;