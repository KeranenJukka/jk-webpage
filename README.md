# Jukka Keränen Webpage

This is a frontend for Jukka Keränen Webpage app. JKW has a frontend, a backend and a database and
it works like this:

1. Quest comes to the website.
2. Frontend sends a request to the backend.
3. If backend can't find a quest from the database with matching ip address, backend creates a new Quest
entity and stores it to the database. Quest entity has id, uuid, ip, times visited, last visited
and website rating columns.
4. If backend finds a quest with matching ip, backend sends that quest's uuid to frontend and updates
last visited column information in the database.
6. Website quest can add a rating to the website.


# Technologies used

Frontend is created with Create React App and the production version runs inside Docker container.

Backend also uses Docker. Development backend container runs a server created with Express and a
database which uses MySQL.

Production versions of frontend and backend are hosted by Heroku. ClearDB MySQL in being used as
a database for production version.

Whole project is written in typescript.


## Installing and running frontend

Frontend can be run without Docker:

1. clone the repository
2. run 'npm i' in the project directory
3. run 'npm start' in the project directory

With Docker:

1. clone the repository
2. install Docker
3. run 'npm run dev' in the project directory
4. or run 'npm run prod' for the production
5. run tests with 'npm t"

In both cases the development server can be run in http://localhost:3000.

Backend development server runs in http://localhost:8000.