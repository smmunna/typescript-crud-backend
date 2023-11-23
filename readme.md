## App's Api 
### Get all users
   https://dull-blue-slippers.cyclic.app/api/v1/users/all
### Get one user
   https://dull-blue-slippers.cyclic.app/api/v1/users/1
### POST user
   https://dull-blue-slippers.cyclic.app/api/v1/users

```json
   
 { 
  "success": true,
  "message": "User hasbeen created successfully",
  "data": {
    "userId": 3,
    "username": "Prisma",
    "password": "",
    "fullName": {
      "firstName": "Prim",
      "lastName": "Ma"
    },
    "age": 25,
    "email": "pris.ma@example.com",
    "isActive": true,
    "hobbies": [
      "reading",
      "swimming"
    ],
    "address": {
      "street": "123 Main Street",
      "city": "Cityville",
      "country": "Countryland"
    },
    "orders": [
      {
        "productName": "Book",
        "price": 15.99,
        "quantity": 2,
        "_id": "655f4a2e7fcb47261e05404e"
      },
      {
        "productName": "Gadget",
        "price": 49.99,
        "quantity": 1,
        "_id": "655f4a2e7fcb47261e05404f"
      }
    ],
    "_id": "655f4a2e7fcb47261e05404d",
    "__v": 0
    }
  }

   ```
 4. Delete user
   - https://dull-blue-slippers.cyclic.app/api/v1/users/3

   ```json
 {
  "success": true,
  "message": "User deleted successfully!",
  "data": {
    "acknowledged": true,
    "deletedCount": 1
  }
}
   ```
5. Update user (only username)
   - https://dull-blue-slippers.cyclic.app/api/v1/users/2

6. Total Price
  - https://dull-blue-slippers.cyclic.app/api/v1/users/655efd86091703c5759a7b46/orders/total-price
  ```json
  
 { 
  "success": true,
  "message": "Total price calculated successfully!",
  "data": [
    {
      "_id": "Munna",
      "totalPrice": 66.98
    }
  ]
}
  ```