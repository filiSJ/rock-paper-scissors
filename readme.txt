To approach the problem I have first identified all the containers and components that would form
part of the app.
I have defined one main container (game-container) which will be in charge of handling the state of
the game. From there, a few stateless components are rendered to display all the pieces.
I have used create-react-app to setup the project.

Improvements:
With more time, there are a few things that could be improved:
* Add functionality to reset score and change player name.
* Add a page with the history of the matches played and the results.
* UI can also be improved. I went for a simple design for now.
* Better responsive design.

Running:
To run the program:
1 - Run npm install in the root directory
2 - Npm run start to start the server. The page will be available in port 3000.
3 - Tests can be run using: npm run test