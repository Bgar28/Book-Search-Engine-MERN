# Book-Search-Engine-MERN

 ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
 ![Apollo GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
 ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  
  ## Description 
  
  This is a full-stack MERN application that uses a MongoDB Atlas database, React front-end, and GraphQL API connected to an Apollo server. A user is able to search for books through a google books API fetch and save/remove the books to their dashboard whenever they're signed into their respective accounts.
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
   
  ## Installation
    This application has been deployed to heroku at the following link:  https://apollos-book-search.herokuapp.com/ <br>

    Clone this repository. Install the dependecies by running this command:
    ```
    npm i
    ```
    Then to start the back-end, cd to the 'server' directory and run the following command:
    ```
    npm run watch
    ```
    To start the front-end, cd to the 'client' directory and run the following command:
    ```
    npm start
    ```


  ## Usage

  When the back-end is running, the user is able to utilize the mutations and query via GraphQL at http://localhost:3001/graphql. Here, the user is able to create a new account. Once authenticated, they  obtain a JSON web token so they're authorized to use the other mutations of saving a book and removing a book. The query is used to obtain all of the logged in user's information and saved books. Below are screenshots of the application. <br>



  ## License
  ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg) Licensed under MIT.

  

  ## Questions?

  Any questions or concerns, please contact me via the information provided below:

  Github: Bgar28 <br> https://github.com/Bgar28/ <br>
  ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

  Or

  Email: briangarlandk@gmail.com <br>
  ![GMAIL](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)