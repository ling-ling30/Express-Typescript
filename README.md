# User Services

This services handles the registration and login functionality also authorization.

Registration available in two different variant :

- registration with role of User
  can be done by everyone
- registration with role of Admin
  can be done only by Super Admin

there is Super Admin that has seeded to the database

Login process checked email and password and return tokens that provide information about role and email of user.

Role can be accessed through role that provides in token, and there's middleware that handled the information provided by Token into request.user

## npm packages

Made by using :
-@prisma/client: ^5.5.2,
-bcryptjs: ^2.4.3,
-cors: ^2.8.5,
-dotenv: ^16.3.1,
-express: 4.18.2,
-jsonwebtoken: ^9.0.2

## TODO

- Login and Register functionality
- Set-up authentication and authorization

## Getting Help
- 

## Further Reading