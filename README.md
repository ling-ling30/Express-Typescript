# REST API Example

This example shows how to implement a **REST API with TypeScript** using [Express](https://expressjs.com/) and [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client). The example uses an PosgreSQL database file.
## Getting started


Clone this repository:

```
https://github.com/ling-ling30/Express-Typescript
```

Install npm dependencies:

```
npm install
```

</details>

### 2. Connect the database
Assumption, this project is starting from scratch

Add DATABASE_URL in .env with format : postgresql://janedoe:mypassword@localhost:5432/mydb?schema=sample

then run the first migration with this command: 
```
npx prisma migrate dev --name init
```

then run generate prsima client
```
npm install @prisma/client
```


### 3. Start the REST API server

```
npm run dev
```
