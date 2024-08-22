API Documentation


Overview:
This API allows for the management of items. You can create, read, update, and delete items using the provided endpoints.
Base URL: your-hosted-server-baseURL/api/v1  for example baseURL/api/v1

EndPoints

Create Item
Endpoint: POST /items
Description: Create a new item.
Request Body:
{
    "name": "Item Name",
    "description": "Item Description",
    "price": 10.00
}

Response:
Success (201):

{
    "success": true,
    "message": "Item added successfully",
    "data": {
        "id": 1,
        "name": "Item Name",
        "description": "Item Description",
        "price": 10.00
    }
}

Error(400)
{
    "success": false,
    "message": "Validation failed",
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "Name is required",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Name should contain alphabetic characters only",
            "path": "name",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Description is required",
            "path": "description",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Description should contain alphabetic characters only",
            "path": "description",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Price is required",
            "path": "price",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "Price must be greater than zero",
            "path": "price",
            "location": "body"
        }
    ]
}

Error(500):

{
     success: false,
     message: 'Internal Server Error',
     error: Server Crashed
}

 Get All Items
Endpoint: GET /items
Description: Retrieve a list of all items.

Response:

Success (200):
{
    "success": true,
    "message": "List of items",
    "data": [
        {
            "id": 1,
            "name": "Item Name",
            "description": "Item Description",
            "price": 10.00
        },
        {
            "id": 2,
            "name": "Item Name",
            "description": "Item Description",
            "price": 10.00
        }
    ]
}

Error(500):

{
     success: false,
     message: 'Internal Server Error',
     error: Server Crashed
}

Get Item by ID
Endpoint: GET /items/:id
Description: Retrieve an item by its ID.

Request Parameters:
id: The ID of the item to retrieve.

Response:

Success (200):
{
    "success": true,
    "message": "Item retrieved successfully",
    "data": {
        "id": 1,
        "name": "Item Name",
        "description": "Item Description",
        "price": 10.00
    }
}

Error(404)
{
    "success": false,
    "message": "Item not found"
}

Error(500):

{
     success: false,
     message: 'Internal Server Error',
     error: Server Crashed
}

Update Item
Endpoint: PUT /items/:id
Description: Update an existing item by its ID.

Request Parameters:
id: The ID of the item to update.

Request Body:
{
    "name": "Updated Item Name",
    "description": "Updated Item Description",
    "price": 15.00
}

Success(200):
{
    "success": true,
    "message": "Item updated successfully",
    "data": {
        "id": 1,
        "name": "Updated Item Name",
        "description": "Updated Item Description",
        "price": 15.00
    }
}

Error (400):
{
    "success": false,
    "message": "Validation failed",
    "errors": [
        ...
    ]
}

Error(500):

{
     success: false,
     message: 'Internal Server Error',
     error: Server Crashed
}

Delete Item
Endpoint: DELETE /items/:id
Description: Delete an item by its ID.

Request Parameters:
id: The ID of the item to delete.

Response:

Success (200):
{
    "success": true,
    "message": "Item deleted successfully"
}
Error (404):

{
    "success": false,
    "message": "Item not found"
}

Error(500):

{
     success: false,
     message: 'Internal Server Error',
     error: Server Crashed
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
To start the server clone this project and run npm i then run this :
node server.js


Example Requests:

Create Item:
curl -X POST baseURL/api/v1/items \
-H "Content-Type: application/json" \
-d '{"name": "Item Name", "description": "Item Description", "price": 10.00}'

Get All Items:
curl -X GET baseURL/api/v1/items

Get Item by ID:
curl -X GET baseURL/api/v1/items/1

Update Item:
curl -X PUT baseURL/api/v1/items/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Item Name", "description": "Updated Item Description", "price": 15.00}'

Delete Item:
curl -X DELETE baseURL/api/v1/items/1
