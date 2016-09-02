'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
