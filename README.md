
## Ineract-BE

*Interact-BE uses REST API*

#### Endpoints

- '/users'
Endpoint for actions with users data
  
    - Method: GET | query: userEmail -
    returns user by his email
  
    - Method: POST | body includes: name, username, email and password -
    creates new user and returns it
  

- '/login'
Endpoint for user authorization
  
    - Method: POST | body includes: username and password -
    returns user by these two properties if user with such properties exists
  
#### How ro run the project locally?
  
1. Download latest NodeJS version
  
2. Run in terminal `npm i`
  
3. Run in terminal `ts-node-esm src/index.ts`