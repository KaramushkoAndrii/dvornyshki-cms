'use strict';

/**
 * our-animal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-animal.our-animal');
