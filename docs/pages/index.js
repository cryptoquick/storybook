import React from 'react';
import glamorous from 'glamorous';

import Head from 'next/head';
import Link from 'next/link';
import Page from '../components/Page';
import StorybookLogo from '../components/logos/Storybook';
import ReactLogo from '../components/logos/React';
import AngularLogo from '../components/logos/Angular';
import VueLogo from '../components/logos/Vue';
import EmberLogo from '../components/logos/Ember';
import PolymerLogo from '../components/logos/Polymer';
import AureliaLogo from '../components/logos/Aurelia';

const Logos = glamorous.div({
  display: 'flex',
  '& > *': {
    flex: 1,
  },
});

export default class IndexPage extends React.Component {
  static async getInitialProps() {
    await Promise.resolve(1);
    return { x: 1 };
  }

  render() {
    // eslint-disable-next-line
    const { x } = this.props;
    return (
      <Page>
        <Head>
          <title>Ola!</title>
        </Head>
        <StorybookLogo />
        <Logos>
          <ReactLogo />
          <AngularLogo />
          <VueLogo />
          <EmberLogo />
          <PolymerLogo />
          <AureliaLogo />
        </Logos>
        <Link prefetch href="/page2"><a>I bet next has more stars (?)</a></Link>
      </Page>
    );
  }
}
