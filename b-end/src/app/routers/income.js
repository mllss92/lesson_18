const route = require('express').Router();

const controller = require('./../components/controllers/income');

module.exports = () => {

  route.post('/get', controller.getIncomes);
  route.post('/add', controller.addIncome)

  return route
}