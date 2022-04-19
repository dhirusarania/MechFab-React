import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles.css";

import reducers from "../src/store/reducers";
// import Navbar from "../src/components/navbar";
import Navbar from "../src/components/navbar/Navbar";
import NavToggler from "../src/components/navbar/toggler";

const makeStore = (initialState, options) => {
  return createStore(reducers, initialState);
};

class MyApp extends App {
  state = {
    firstRender: true,
    navbarVisible: false
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  toggleNavbarVisibility = () => {
    this.setState({
      navbarVisible: !this.state.navbarVisible
    });
  };

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Navbar
            toggleNavbarVisibility={this.toggleNavbarVisibility}
            navbarVisibility={this.state.navbarVisible}
          />
          <NavToggler
            navbarVisible={this.state.navbarVisible}
            toggleNavbar={this.toggleNavbarVisibility}
          />
          <Head>
            <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
            <link
              rel="stylesheet"
              href="/static/css/owl.theme.default.min.css"
            />
            <script src="/static/js/jquery-3.4.1.min.js"></script>
            <script src="/static/js/owl.carousel.min.js"></script>
          </Head>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
