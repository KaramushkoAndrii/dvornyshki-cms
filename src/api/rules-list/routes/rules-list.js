'use strict';

/**
 * rules-list router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rules-list.rules-list');
