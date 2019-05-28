import React from 'react';
import App, { Container } from 'next/app';
import { StoreContext } from 'redux-react-hook';
import { withReduxStore } from '../withReduxStore';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <StoreContext.Provider value={reduxStore}>
          <Component {...pageProps} />
        </StoreContext.Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
