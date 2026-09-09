# Shopping List API

A RESTful API developed with Node.js, Hapi.js, and MongoDB for managing products in a shopping list.

This project was developed to practice backend development, REST APIs, database integration, and CRUD operations.

## Technologies

* Node.js
* JavaScript
* Hapi.js
* MongoDB
* Mongoose
* Nodemon

## Features

The API supports the following operations:

* Create a product
* List all products
* Find a product by ID
* Update a product
* Partially update a product
* Delete a product

## Project Structure

```text
ListaDeCompras/
├── src/
│   ├── handlers/
│   │   └── product.js
│   ├── models/
│   │   └── product.js
│   ├── services/
│   │   └── mongo.js
│   ├── index.js
│   └── routers.js
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint                | Description                |
| ------ | ----------------------- | -------------------------- |
| GET    | `/api/v1/products`      | Get all products           |
| GET    | `/api/v1/products/{id}` | Get a product by ID        |
| POST   | `/api/v1/products`      | Create a product           |
| PUT    | `/api/v1/products/{id}` | Update a product           |
| PATCH  | `/api/v1/products/{id}` | Partially update a product |
| DELETE | `/api/v1/products/{id}` | Delete a product           |

## Product Structure

```json
{
  "name": "Milk",
  "price": 5.99
}
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd ListaDeCompras
```

Install the dependencies:

```bash
npm install
```

Make sure MongoDB is running and configured for the project.

Start the application:

```bash
npm start
```

The API will be available at:

```text
http://localhost:3000
```

## Example

### Create a product

```http
POST /api/v1/products
Content-Type: application/json
```

```json
{
  "name": "Milk",
  "price": 5.99
}
```

## Project Goals

This project was developed to practice:

* REST API development
* HTTP methods and status codes
* CRUD operations
* MongoDB integration
* Mongoose models
* API routing
* Backend project organization
* JSON data structures

## Author

Pedro Henrique

Software Engineering student interested in backend development, APIs, and software engineering.

---

If you find this project useful, feel free to explore the repository and other projects on my profile.

