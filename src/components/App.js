import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return <div>{this.props.loading === true ? null : <Dashboard />}</div>;
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null
  };
}

export default connect()(App);
