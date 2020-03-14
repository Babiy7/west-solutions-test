import React, { Component } from "react";

import axios from "../../axios/axios";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };

      this.request = axios.interceptors.request.use(
        response => {
          return response;
        },
        e => {
          this.setState({ error: e });
          return Promise.reject(e);
        }
      );
      this.response = axios.interceptors.response.use(
        response => {
          return response;
        },
        e => {
          this.setState({ error: e.message });
          return Promise.reject(e);
        }
      );
    }

    deleteError = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <Modal show={this.state.error} unShow={this.deleteError}>
            <h2 style={{ color: "red" }}>{this.state.error}</h2>
          </Modal>
        </>
      );
    }
  };
};

export default withErrorHandler;
