"use strict";

var Dashboard = require("../models/dashboardModel");

var faker = require('faker');

var newDashboard = [{
  amount: 100000,
  type: "Income",
  date: 2,
  month: "January",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "February",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 2
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "March",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "April",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 2
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "May",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "June",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 2
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "July",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "August",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "September",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "October",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "November",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 100000,
  type: "Income",
  date: 2,
  month: "December",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Job",
  division: "Office",
  userid: 1
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "January",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Rent",
  division: "Office",
  userid: 1
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "February",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Rent",
  division: "Office",
  userid: 1
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "March",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Rent",
  division: "Office",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "April",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Entertainment",
  division: "Personal",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "May",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Entertainment",
  division: "Personal",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "June",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Entertainment",
  division: "Personal",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "July",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Food",
  division: "Personal",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "August",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Food",
  division: "Personal",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "September",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Food",
  division: "Office",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "October",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Transport",
  division: "Office",
  userid: 2
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "November",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Transport",
  division: "Office",
  userid: 1
}, {
  amount: 15000,
  type: "Expenditure",
  date: 2,
  month: "December",
  year: 2020,
  description: faker.lorem.sentence(),
  category: "Transport",
  division: "Office",
  userid: 1
}];

var dashboardSeeder = function dashboardSeeder() {
  return regeneratorRuntime.async(function dashboardSeeder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Dashboard.sync({
            force: true
          }));

        case 2:
          newDashboard.forEach(function _callee(dashboard) {
            var result;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(Dashboard.create(dashboard));

                  case 3:
                    result = _context.sent;
                    console.log(result.get());
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    console.error(_context.t0);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, null, null, [[0, 7]]);
          });

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

dashboardSeeder();