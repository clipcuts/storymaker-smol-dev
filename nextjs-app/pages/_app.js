import React from 'react';
import { GedcomProvider } from '../context/GedcomContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GedcomProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GedcomProvider>
  );
}

export default MyApp;