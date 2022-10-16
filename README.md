# Iridium - Bulk Data Solution
HTML based communication with a database located in a PostgreSQL interface. Built utilizing a PERN stack structure, implimenting multiple react modules, node.js, and Bootstrap

I used the following references to help me build this program

Code based on: https://www.youtube.com/watch?v=ldYcgPKEZC8

Helpful Resources:
- https://www.geeksforgeeks.org/difference-between-pern-and-mern-stack/#:~:text=PERN%20STACK%3A%20This%20stack%20consists,is%20great%20for%20complex%20duties.
- https://pern-starter.herokuapp.com/

## Necessary Modules to run

** node.js: ** https://nodejs.org/en/ 
Video on node.js: https://www.youtube.com/watch?v=RLtyhwFtXQA&t=0s

** react.js: ** Installed using commands on the linux terminal
Video on React: https://www.youtube.com/watch?v=DLX62G4lc44&t=0s 

** PostgreSQL ** https://www.postgresql.org/download/
Video on PostgreSQL: https://www.youtube.com/watch?v=qw--VYLpxG4&t=2025s

## Once Set up, follow the steps 
    1) Open a PostgreSQL shell and login (select all default options and enter your password you created) and create a new database in (For this code, the table is called perntodo2) by running the following command 
        > CREATE DATABASE perntodo2;
    2) Connect to the table you just created with
        > \c perntodo2
    3) Create a new table (called todo) with an ID, description, and override value
        > CREATE TABLE todo(
        > todo_id SERIAL PRIMARY KEY,
        > description VARCHAR(255),
        > override int,
        > );
        - This will initialize an empty database, values can be added later on the website. The code instructions are also listed in database.sql
    4) Open a UNIX (I used GitBash) in server and run the command, this will boot up the SQL table on localhost:5000
        > nodemon index.js
    5) Open another terminal in client and run the command
        > npm start
    6) The application should open on your web browser on localhost:3000, currently this program only accepts values which are added individually,

## Implimentation 1
    Utilizes a one at a time appending utilizing a for loop. It will continouosuly call "POST" for the given index in the loop. Once finished, it will refresh the webpage and return the data table
        > NOTE: the table CANNOT loop for integers of varying character lengths (e.g. 1- 9, 10- 99, 100 - 999 all work, but 1-10, 10 - 100, 100 - 1000 don't work)

## Implimentation 2
    Utilizes a singular POST command which calls for indexes between the starting and ending index. Once finished it will refresh the website and return the data table
