import Head from 'next/head';

const Layout = (props) => (
  <div>

    <Head>
      <title>Latest tweets</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' />
    </Head>

    {props.children}
  </div>
)

export default Layout
