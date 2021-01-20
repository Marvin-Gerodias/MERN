const { response } = require('express');
const express = require('express');
const faker = require('faker');

const app = express();
app.use(express.json());

class User {
    constructor() {
        this.userId = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.compId = faker.random.number();
        this.compName = faker.company.companyName();
        this.address = { 
            streetName: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country()
        }
    }
}


console.log(new Company());

app.get('/api/users/new', (req, res) =>{
    res.json(new User());
});

app.get('/api/companies/new', (req, res) =>{
    res.json(new Company());
});

app.get('/api/user/company', (req, res) =>{
    res.json({
        user: new User(),
        company: new Company()
    });
});

app.listen(8001, () => console.log('listening on port 8001'));