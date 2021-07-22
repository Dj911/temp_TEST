import { handleResponse, handleError } from '../../config/requestHandler';
import { logger } from '../../middlewares/logger';
import { registerCreator } from './creatorService';

module.exports = {
    register: async (req, res) => {
        logger.info('Inside register Controller');
        try {
            const data = await registerCreator(req.body);
            return handleResponse({ res, ...data })
        } catch (error) {
            return handleError({ res, error, data: error });
        }
    }
}