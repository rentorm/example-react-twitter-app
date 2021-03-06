require('dotenv').config()

const express = require('express')
const next = require('next')
const Twitter = require('twitter')


const port = parseInt(process.env.PORT, 10) || 3030
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const twitterHandle = process.env.TWITTER_HANDLE;
const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.prepare()
.then(() => {
  const server = express()

    // twitter api
    server.get('/api/tweets/:handle?', (req, res) => {
      const { handle = twitterHandle } = req.params;
      return twitterClient
        .get(`statuses/user_timeline`, {
          screen_name: handle,
          count: 10
        })
        .then(tweets => res.json({ handle, tweets }))
        .catch(err => {
          console.error('Error', err);
          return res.status(500).json({ error: 'Invalid request' });
        });
    });

  server.get('/:handle', (req, res) => {
    const queryParams = { handle: req.params.handle }
    return app.render(req, res, '/', queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
