import express from 'express'
import { faker } from '@faker-js/faker'
const app = express()
app.use(express.json())
const port = 8000;


//     User Object
app.get("/api/test/user", (req, res) => {
    console.log("test user");

    const createUser = () => {
        const newUser = {
            password: faker.internet.password(),
            email: faker.internet.exampleEmail(),
            phoneNumber: faker.phone.number(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            id: faker.datatype.uuid()
        };
        return newUser;
    }

    const newFakeUser = createUser();
    res.send(newFakeUser)

});

//Company Object
app.get("/api/test/company", (req, res) => {
    console.log("test company");

    const createCompany = () => {
        const newCompany = {
            id: faker.datatype.uuid(),
            name: faker.company.name(),
            address: [{
            street_address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode('#####'),
            country: faker.address.country()
            }]
        };
        return newCompany;
    }

    const newFakeCompany = createCompany();
    res.send(newFakeCompany)

});

//Company Object
app.get("/api/test/company/user", (req, res) => {
    console.log("test company");

    const createCompany = () => {
        const newCompany = {
            id: faker.datatype.uuid(),
            name: faker.company.name(),
            address: [{
            street_address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode('#####'),
            country: faker.address.country()
            }]
        };
        return newCompany;
    }

    const createUser = () => {
        const newUser = {
            password: faker.internet.password(),
            email: faker.internet.exampleEmail(),
            phoneNumber: faker.phone.number(),
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            id: faker.datatype.uuid()
        };
        return newUser;
    }

    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.send({company: newFakeCompany, user: newFakeUser})

});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
