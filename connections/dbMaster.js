import mongoose from 'mongoose'
import { db } from '../config/index'
import logger from '../middlewares/logger'

const DB = mongoose.createConnection(db.str, db.options)

// CONNECTION EVENTS

// When successfully connected
DB.on('connected', () => {
    logger.info('Mongoose connection open to master DB')
})

// If the connection throws an error
DB.on('error', (err) => {
    logger.debug(`Mongoose connection error for master DB: ${err}`)
})

// When the connection is disconnected
DB.on('disconnected', () => {
    logger.debug('Mongoose connection disconnected for master DB')
})

// When connection is reconnected
DB.on('reconnected', () => {
    logger.info('Mongoose connection reconnected for master DB')
})
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    DB.close(() => {
        logger.debug(
            'Mongoose connection disconnected for master DB through app termination'
        )
        // eslint-disable-next-line no-process-exit
        process.exit(0)
    })
})

module.exports = DB