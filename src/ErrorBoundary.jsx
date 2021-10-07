import { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/errorboundary.scss';
// # Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in component constructors full the whole tree below them.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  // ! MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error) {
    return { error };
  }

  // ! CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <Header />
          <h2 className="error__message">
            There has been an error and you got lost, please use the nav bar to
            find your way home.{' '}
          </h2>
          <Footer />
        </>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;

// Error boundaries work like a JavaScript catch {} block, but for components. Only class-based (smart) components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application. Error boundaries do NOT catch errors for any of the following:
// - Event handlers (error boundaries run only on render; click events don't run then... use try/catch if needed)
// - Asynchronous code (setTimeouts)
// - Server side rendering
// - Errors thrown within the error boundary itself
