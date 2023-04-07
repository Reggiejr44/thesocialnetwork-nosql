# thesocialnetwork-nosql
Social Network API

## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [User Story](#user-story)
  * [Acceptance Criteria](#user-story)
  * [Installation](#installation)
  * [Setup](#setup)
  * [Usage](#usage)
  * [Technologies](#technologies)
  * [Questions?](#questions)


## License
  Read more about MIT here:
  [MIT](https://opensource.org/licenses/MIT)


## Description
An API for a social network web application where users can add friends, share their thoughts, and react to one anothers thoughts.


## User Story
```
    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data
```


## Acceptance Criteria 
```
    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
    

## Installation and Setup
- Step 1: Clone this repository. you can do this by running ``` git clone git@github.com:Reggiejr44/thesocialnetwork-nosql.git``` in your terminal
- Step 2: Open your code editor by running the command ``` code . ```
- Step 3: Install dependencies by running the ``` npm install ``` command in the command line
- step 4: Start the server by running ``` npm start ``` in the terminal
- step 5: Open any application that simplifies the interaction and design of HTTP-based APIs like [insomnia](https://insomnia.rest/download)
- step 6: Create, read, update, and delete Users, thoughts, and reactions using endpoints in usage


## Setup
Integrated Terminal: 	
* mongod
* npm i
* npm start
        
        
## Usage
After following the instructions in installation: 
1. Open integrated terminal for your project.
3. Run command "npm run start" 
4. Open insomnia and type in "localhost:3001/api/_" in the address bar. Check out the following routes: <br><br>
User + Friends <br>
- `/api/users` to get all users or create user
- `/api/users/:userId` to get one user, update and delete user
- `/api/users/:userId/friends/:friendId` to add or delete a friend <br><br>
Thought + Reactions <br>
- `/api/thoughts` to get all thoughts or create thought
- `/api/thoughts/:thoughtId` to get one thought, update or delete. 
- `/api/thoughts/:thoughtId/reactions` to create reaction 
- `/api/thoughts/:thoughtId/reactions?reactionId=` to delete reaction 
5. When finished, run CONTROL-C in terminal to end and trash the session. 

Please check out this [Demonstration](https://clipchamp.com/watch/qSzW6PjAUGu) of how to use this program. 

## Technologies
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)
* [Mongoose](https://mongoosejs.com/docs/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


  ## Questions?
  ### Reach me here: 
  [ReginaldPrince](https://github.com/Reggiejr44)  
  Regprince788@gmail.com