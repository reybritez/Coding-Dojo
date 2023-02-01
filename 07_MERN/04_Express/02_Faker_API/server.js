import { faker } from "@faker-js/faker";
import express, { json } from "express";

const app = express();
const port = 5000;

app.listen(port, console.log(`Server started on port: ${port}`));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

//Funcion CREAR usuario
const crearUsuario = () => {
  return {
    _id: faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    telefono: faker.phone.number(),
  };
};

const crearCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    nombre: faker.company.name(),
  };
};

app.get("/api/users/new", (req, res) => {
  const usuario = crearUsuario();
  res.json(usuario);
  console.log(req);
  console.log(usuario);
});

app.get("/api/companies/new", (req, res) => {
  const company = crearCompany();
  res.json(company);
  console.log(req);
  console.log(company);
});

app.get("/api/user/company", (req, res) => {
  const user_company = {
    user: crearUsuario(),
    company: crearCompany(),
  };
  res.json(user_company);

  console.log(user_company);
});
