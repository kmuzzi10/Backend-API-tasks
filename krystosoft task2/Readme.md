Items API Documentation Using MySQL

Overview:
This API provides CRUD operations for managing items. It allows clients to create, read, update, and delete items stored in a MySQL database. The API uses express-validator for validating input data.

Database Access:
Create .env file in root directory of your project and create these variables for using database
DB_NAME=your database name
USERNAME=your username
PASSWORD=your password
HOST= your host //while i have localhost because i work locally in my PC

Base URL:
your-domain/api/v1 //for example http://localhost:300/api/v1

Endpoints
Create Item:
URL: /items

Method: POST

Description: Creates a new item with the specified name, description, and price.

Request Body:
{
"name": "Sample Item",
"description": "A sample item for testing",
"price": 19.99
}
Success Response:

Code: 201 Created

Response:
{
"success": true,
"message": "Item Added Successfully",
"data": {
"id": 1,
"name": "Sample Item",
"description": "A sample item for testing",
"price": 19.99,
"createdAt": "2024-08-22T00:00:00.000Z",
"updatedAt": "2024-08-22T00:00:00.000Z"
}
}

Validation Errors:

Code: 400 Bad Request

Response:
{
"success": false,
"message": "Validation Error",
"errors": [
{
"msg": "Name should contain alphabetic characters only",
"param": "name",
"location": "body"
},
{
"msg": "Description should contain alphabetic characters only",
"param": "description",
"location": "body"
},
{
"msg": "Price should be greater than zero",
"param": "price",
"location": "body"
},
]
}

Server Error:

Code: 500 Internal Server Error

Response:
{
"success":false,
"message":"Internal Server Error"
}

Get All Items
URL: /items

Method: GET

Description: Retrieves all items from the database.

Success Response:

Code: 200 OK

Response:
{
"success": true,
"message": "Items List",
"data": [
{
"id": 1,
"name": "Sample Item",
"description": "A sample item for testing",
"price": 19.99,
"createdAt": "2024-08-22T00:00:00.000Z",
"updatedAt": "2024-08-22T00:00:00.000Z"
}
]
}

Server Error:

Code: 500 Internal Server Error

Response:
{
"success":false,
"message":"Internal Server Error"
}

Get Item by ID
URL: /items/:id

Method: GET

Description: Retrieves an item by its id.

Success Response:

Code: 200 OK

Response:
{
"success": true,
"message": "Item",
"data": {
"id": 1,
"name": "Sample Item",
"description": "A sample item for testing",
"price": 19.99,
"createdAt": "2024-08-22T00:00:00.000Z",
"updatedAt": "2024-08-22T00:00:00.000Z"
}
}

Item Not Found:

Code: 404 Not Found

Response:
{
"success": false,
"message": "Item Not Found With This Id"
}

Server Error:

Code: 500 Internal Server Error

Response:
{
"success":false,
"message":"Internal Server Error"
}

Update Item
URL: /items/:id

Method: PUT

Description: Updates an existing item with the specified name, description, or price.

Request Body: (At least one field should be provided)
{
"name": "Updated Item",
"description": "An updated description",
"price": 29.99
}

Success Response:

Code: 201 Created

Response:
{
"success": true,
"message": "Item Updated Successfully",
"data": {
"id": 1,
"name": "Updated Item",
"description": "An updated description",
"price": 29.99,
"createdAt": "2024-08-22T00:00:00.000Z",
"updatedAt": "2024-08-22T00:00:00.000Z"
}
}

Validation Errors:

Code: 400 Bad Request

Response:
{
"success": false,
"message": "Validation Error",
"errors": [
{
"msg": "Name should contain alphabetic characters only",
"param": "name",
"location": "body"
},
{
"msg": "Description should contain alphabetic characters only",
"param": "description",
"location": "body"
},
{
"msg": "Price should be greater than zero",
"param": "price",
"location": "body"
},
]
}

Server Error:

Code: 500 Internal Server Error

Response:
{
"success":false,
"message":"Internal Server Error"
}

Delete Item
URL: /items/:id

Method: DELETE

Description: Deletes an item by its id.

Success Response:

Code: 201 Created

Response:
{
"success": true,
"message": "Item Deleted Successfully"
}

Item Not Found:

Code: 404 Not Found

Response:
{
"success": false,
"message": "Item Not Found With This Id"
}

Server Error:

Code: 500 Internal Server Error

Response:
{
"success":false,
"message":"Internal Server Error"
}

Validation Rules

Name:
Must be a string.
Cannot be empty.
Must contain only alphabetic characters and spaces.

Description:
Must be a string.
Cannot be empty.
Must contain only alphabetic characters and spaces.

Price:
Must be a float greater than 0.
Cannot be empty.

Running the Server
To start the server first clone this project do npm i in terminal then hit this command:
node server.js

Examples to use API

Create Item
curl -X POST http://localhost:3000/api/v1/items \
-H "Content-Type: application/json" \
-d '{
"name": "Sample Item",
"description": "A sample item for testing",
"price": 19.99
}'

Get All Items
curl -X GET http://localhost:3000/api/v1/items

Get Item by ID
curl -X GET http://localhost:3000/api/v1/items/1

Update Item
curl -X PUT http://localhost:3000/api/v1/items/1 \
-H "Content-Type: application/json" \
-d '{
"name": "Updated Item",
"description": "An updated description",
"price": 29.99
}'

Delete Item
curl -X DELETE http://localhost:3000/api/v1/items/1
