# Example React Twitter App

is an example project of server-rendered React application utilising Twitter API to get latest 10 tweets and render on the page

### Features

- Next.js SSR framework
- Express.js
- ReactJS
- Semantic UI react components
- client library for the Twitter REST and Streaming API's
- isomorphic-fetch

---

## How to use

### Set up

Make sure Node and Yarn are installed on your environment

Clone and install:

```bash
git clone https://github.com/rentorm/example-react-twitter-app
cd example-react-twitter-app
yarn install
```

Clone .env.default to .enc and set required variables

```bash
cp .env.example .env
```

```
TWITTER_HANDLE=cnnbrk
TWITTER_DATA_API=http://localhost:3030
TWITTER_CONSUMER_KEY=
TWITTER_SECRET=
TWITTER_ACCESS_TOKEN_KEY=
TWITTER_ACCESS_TOKEN_SECRET=
```

### Run

Run it using:

```bash
yarn dev
```

Open in your browser http://localhost:3030/ or `http://localhost:3030/cnnbrk-tweets` or `http://localhost:3030/bbcnews-tweets` etc.

## To do

- [ ] set up ESlint airbnb config and refactor project according to it's standards
- [ ] set up Serverless framework for AWS Lambda deployment
 
