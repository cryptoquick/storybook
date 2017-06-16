import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Page from '../components/Page';

export default () =>
  <Page>
    <Head>
      <title>Ola!</title>
    </Head>
    <p>Let's bounce.</p>
    <Link prefetch href="/"><a>I bet next has more stars (?)</a></Link>
  </Page>;
