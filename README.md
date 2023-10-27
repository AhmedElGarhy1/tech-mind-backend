# Techmind Backend

Techmind is a paltform that enable it's admin to publish new courses/diplomas and let students be up-to-date with the newest courses/diplomas

## How to Run it

### Installation

1. First you need to clone this repository

```sh
git clone https://github.com/AhmedElGarhy1/tech-mind.git
```

2. install node from [Download NodeJS](https://nodejs.org/en/download)
3. navigate into the project folder
4. run `npm install` in your terminal or command prompt
5. create `.env` file from the `.env.example` file Note you don't have to put the firebase keys if you don't use firebase storage
6. start the server by running `npm run dev` for development mode and `npm start` for production mode

Now you have the server running on port 3000

### Seeding

You have a seeder file to feed the database with mockData run

```sh
npm run seed
```

### API Documentation

The documentation is available at: https://github.com/AhmedElGarhy1/tech-mind/API.md
