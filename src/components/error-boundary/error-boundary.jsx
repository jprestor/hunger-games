import React, { Component } from '../../containers/app/node_modules/react';
import { ErrorIndicator } from '../error-indicator';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator error={{ message: 'Something wrong!' }} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
