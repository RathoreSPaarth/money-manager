"use strict";

var User = require("../models/userModel");

var newUser = [{
  email: "paarth@gmail.com",
  password: "304304"
}, {
  email: "test123@test.com",
  password: "test"
}];

var userSeeder = function userSeeder() {
  return regeneratorRuntime.async(function userSeeder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.sync({
            force: true
          }));

        case 2:
          newUser.forEach(function _callee(user) {
            var result;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(User.create(user));

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

userSeeder();