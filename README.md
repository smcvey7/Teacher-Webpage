# Phase 2 Project
This project is intended to demonstrate the skills I have gained during phase 2 of Flatiron. The project comprises a single page application designed using React. The main components of the 
application are:  

- A navigation bar which uses client-side routing to direct the user to the different pages

- A log in form where users can either log in or create an account

- A messages tab which displays messages to and responses from the teacher. There is also a form to compose and send new messages to the teacher.

- An assignments tab which organizes assignments into completed, upcoming, and up next. Each assignment has a form to submit the assignment and graded assignments show marks received and teacher comments.

- A gradebook tab where grades for completed assignments are displayed

- A homepage tab with a weekly calendar and announcements.

## Running

The project runs through the [json-server](https://github.com/typicode/json-server project as both a static file server and managing a JSON based database and API. First install using the command  `npm install -g json-server`, then from the project root use `json-server --watch db.json`. This will launch the json-server with the site accessible from [localhost:3000](http://localhost:3000/)

The application can then be opened using the command `npm start`. Since port 3000 already has the json-server running, it may ask whether or not to run the app on a different port. Say yes.