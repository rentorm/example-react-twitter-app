import Head from 'next/head';

export default (props) => (
  <div style={{ background: '#f6f6f8' }}>

    <Head>
      <title>Latest tweets</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css' />
    </Head>

    {props.children}
  </div>
)
