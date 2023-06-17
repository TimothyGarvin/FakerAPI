const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
  const userObject = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.number.int()
  }
  console.log(userObject)
  return userObject
}

const createCompany = () => {
  const companyObject = {
    _id: faker.number.int(),
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    }}
    console.log(companyObject)
    return companyObject
  }


const newUser = createUser();
const newCompany = createCompany();


app.get('/api', (req,res) => {
    res.json({ message: "Hello World" });
});

app.get('/api/users/new', (req,res) => {
  res.json(newUser);
});

app.get('/api/companies/new', (req,res) => {
  res.json(newCompany);
});

app.get('/api/user/company', (req,res) => {
  res.json( {newUser, newCompany} )
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );