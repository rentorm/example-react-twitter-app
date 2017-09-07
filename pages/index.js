import React from 'react'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout.js'
import MasterHeader from '../components/MasterHeader';
import TweetsList from '../components/TweetsList';

export default class extends React.Component {

  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch(TWITTER_DATA_API)
    const json = await res.json()
    return { tweets: json.tweets }
  }

  render() {
    let loadingMessage
    if (this.props.tweets.length === 0) {
      loadingMessage = <p><i>Loading tweets…</i></p>
    }

    return (
      <Layout>

        <MasterHeader />

        {loadingMessage}

        <TweetsList tweets={this.props.tweets} />

      </Layout>
    )
  }
}
