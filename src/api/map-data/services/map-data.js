'use strict';

/**
 * map-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::map-data.map-data');
