import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Brainy Dictionary' : 'Brainy Dictionary'}
        </title>
        <meta name="description" content="Open Dictionary Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
