/* 
  *************************************************************************
  *************************************************************************

    NAME
    _app.js

    SUMMARY
    This file defines the top-level component that wraps the outside of 
    each page in the application.

    FLOW

  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/

// external imports
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';

// component imports
import Header from 'components/general/Header';

// util imports
import withData from 'lib/withData';

// style imports
import 'styles/components/nprogress.css';
import GlobalStyles from 'styles/general/Global';

/* 
  ------------------------
  2. document-level logic
  ------------------------
*/

// this animates the route changes to indicate progress
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/* 
  -----------------------
  5. rendered components
  -----------------------
*/

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <>
        <Head>
          <title>Ukraine</title>
        </Head>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
