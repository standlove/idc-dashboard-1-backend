'use strict';

var util = require('util');
var plants = require('../../mockJson/plants.json')
var product = require('../../mockJson/product.json')
var daily = require('../../mockJson/daily-miq.json')
var weekly = require('../../mockJson/weekly-miq.json')
var monthly = require('../../mockJson/monthly-miq.json')
var top = require('../../mockJson/top-product.json')
var drop = require('../../mockJson/drop-history.json')

module.exports = {
  getPlants : getPlants,
  getProduct : getProduct,
  getBatchDaily: getBatchDaily,
  getBatchWeekly: getBatchWeekly,
  getBatchMonthly: getBatchMonthly,
  getTopProduct: getTopProduct,
  getDropHistory: getDropHistory
};


function getPlants(req, res) { res.json(plants) };

function getProduct(req, res) { res.json(product) };

function getBatchDaily(req, res) { res.json(daily) };

function getBatchWeekly(req, res) { res.json(weekly) };

function getBatchMonthly(req, res) { res.json(monthly) };

function getTopProduct(req, res) { res.json(top) };

function getDropHistory(req, res) { res.json(drop) };