module.exports = {
    db: {
        str: process.env.MONGO_URL,
        options: {
            auto_reconnect: true,
            poolSize: 200,
            useNewUrlParser: true,
            readPreference: 'primaryPreferred',
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        },
    }
}