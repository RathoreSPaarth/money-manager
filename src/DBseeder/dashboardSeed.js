const Dashboard = require("../models/dashboardModel");
var faker = require('faker');
const newDashboard = [
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "January",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "February",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 2
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "March",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "April",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 2
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "May",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "June",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 2
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "July",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "August",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "September",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "October",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "November",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 100000,
    type : "Income",
    date : 2,
    month : "December",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Job",
    division: "Office",
    userid: 1
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "January",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Rent",
    division: "Office",
    userid: 1
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "February",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Rent",
    division: "Office",
    userid: 1
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "March",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Rent",
    division: "Office",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "April",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Entertainment",
    division: "Personal",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "May",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Entertainment",
    division: "Personal",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "June",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Entertainment",
    division: "Personal",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "July",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Food",
    division: "Personal",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "August",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Food",
    division: "Personal",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "September",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Food",
    division: "Office",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "October",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Transport",
    division: "Office",
    userid: 2
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "November",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Transport",
    division: "Office",
    userid: 1
  },
  {
    amount : 15000,
    type : "Expenditure",
    date : 2,
    month : "December",
    year : 2020,
    description: faker.lorem.sentence(),
    category: "Transport",
    division: "Office",
    userid: 1
  },
];

const dashboardSeeder = async () => {
  await Dashboard.sync({ force: true });
  newDashboard.forEach(async dashboard => {
    try {
      const result = await Dashboard.create(dashboard);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

dashboardSeeder();
