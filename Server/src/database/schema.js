/**
 * @modult schema
 * @description This module is probides schemas for validation data.
 */

const Joi = require('joi');

/**
 * @typedef {Object} transactionSchema
 * @property {number} amount - The amount of the transaction
 * @property {string} date - The date of the transaction
 * @property {string} type - The type of the transaction
 * @property {string} category - The category of the transaction
 */

/**
 * @description Schema for validating a transaction.
 * @type {Joi.ObjectSchema}
 */
const transactionSchema = Joi.object({
  amount: Joi.number().required(),
  date: Joi.date().required(),
  type: Joi.string().required(),
  category: Joi.string().required(),
});

module.exports = {
  /**
   * @description Schema for validating a transaction.
   */
  transactionSchema,
};