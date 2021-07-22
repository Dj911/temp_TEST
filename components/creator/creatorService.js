import { logger } from '../../middlewares/logger';
import { User } from '../user/userModel';

module.exports = {
    registerCreator: async (data) => {
        logger.info('Inside registerCreator Service');
        try {
            //TODO: storing creator profile through multer in AWS
            const result = await User.create(data)
            return { data: result }
        } catch (error) {
            logger.error(error)
            throw error
        }
    }
}