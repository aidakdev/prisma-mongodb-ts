Prisma + MongoDB + TypeScript
===============

An experiment using the Prisma MongoDB driver using TypeScript.

# Flow

- Create an user
- Update the user (getting the id from the previously created one)
- Finding all users
- Deleting all users

# Schema

```ts
datasource db {
  provider = "mongodb"
  url = env("MONGODB_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  username String
}
```