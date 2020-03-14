import React, { Component } from "react";

//import axios from "axios";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };

      //   this.request = axios.interceptors.request.use(
      //     () => {},
      //     e => {
      //       this.setState({ error: e });
      //     }
      //   );
      //   this.response = axios.interceptors.request.use(
      //     () => {},
      //     e => {
      //       this.setState({ error: e });
      //     }
      //   );
    }

    deleteError = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <Modal show={this.state.error} unShow={this.deleteError} />
        </>
      );
    }
  };
};

export default withErrorHandler;
