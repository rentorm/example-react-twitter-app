const prod = process.env.NODE_ENV === 'production';

module.exports = {
    TWITTER_DATA_API: prod ? process.env.TWITTER_DATA_API : 'http://localhost:3030/api/tweets'
};
