// ErrorBoundary.js
import React, { Component } from 'react';
import ErrorPage from './pages/ErrorPage/ErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Aggiorna lo stato per mostrare la UI di fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puoi loggare l'errore su un servizio di monitoraggio
    console.error('Errore catturato da Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
