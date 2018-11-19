# Todo List
A Todo list built with a MERN stack that uses Material-UI for styling.  In summary, you are able to:

* Create a new task and add it to the list
* Mark the task as complete by clicking on it
* Once a task is marked complete, delete the task
* ...whilst using an Express API to make CRUD operations to a MongoDB database

The application is hosted on Heroku, with Express responsible for serving both the client, as well as serving API requests to the database.    

## Local Installation 

* Run npm install for both deploy-todo and client folder. 
* Modify request path URL in Todo.js to include localhost.  
* Express API and client server defaults to port 3001 and 3000 respectively. 
* You can change Mongoose driver settings for database integration in models/index.js


