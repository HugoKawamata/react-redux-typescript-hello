import * as React from "react";
import "./App.css";
import { Provider } from "react-redux";
import HelloContainer from "./containers/HelloContainer";

// An instance of store. All of state is contained within this.
import store from "./store";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <HelloContainer />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
