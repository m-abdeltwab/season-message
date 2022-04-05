// * 1- Import React & ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import ErrorMsg from "./components/ErrorMsg";

// * 2- create react component

class App extends React.Component {
  state = {
    lat: null,
    errMsg: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  renderContent() {
    if (this.state.errMsg) {
      return <ErrorMsg msg={this.state.errMsg} />;
    } else if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please, Accept Location Request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

// * 3- Show The React Component On The Screen
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
