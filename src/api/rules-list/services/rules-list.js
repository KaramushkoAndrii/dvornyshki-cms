'use strict';

/**
 * rules-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rules-list.rules-list');
