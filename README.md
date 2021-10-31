# fetchRewardsCodingExercise

---

**_Description_**

Coding exercise for the Fetch Rewards Backend Apprenticeship

---

**_Requirements_**
  - NodeJS should be installed
  - PostgresSQL should be installed
  - Use [Insomnia](https://insomnia.rest/download) or Postman or any other similar tool to test routes
 ---

**_Getting Started_**
1. Clone repo onto your machine. Then, in the root directory, on your CLI:

2. `npm install` to install all dependencies needed
3. `sequelize db:create` to create the database named points_development (in config.json)
4. `sequelize db:migrate` to set up database schema
5. `npm run dev` to run the server.



### On Insomnia: 

BASE_URL for all routes = "http://localhost:3001/points/"

- Add transactions : POST request => BASE_URL + 'transaction/create'
- Spend points: PUT request => BASE_URL + 'spend'
- GetBalance: GET request => BASE_URL + 'balance'



---
