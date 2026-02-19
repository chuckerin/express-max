# Express JS Server for Node.js

This is an Express Web Server framework that demonstrates some of the capability of Express written out in TypeScript.

## Project tools

- [Express](https://expressjs.com/) - Web Server Framework for Node.js
- [Typscript](https://www.typescriptlang.org/) - Primary language

## Dev tools

- [Nodemon](https://www.npmjs.com/package/nodemon) - Will restart server when code changes
- [Concurrently](https://www.npmjs.com/package/concurrently) - Run multiple commands concurrently.

## Cloning, Running, & Testing

1. Open a terminal, navigate to the location you want to clone the project.
2. Clone the project `git clone https://github.com/chuckerin/express-max.git`
3. Navigate to the root of the project `cd express-max`
4. Install the package dependencies `npm i`
5. Run the app `npm run start`
   1. The project should be served on `http://localhost:3005/`
6. Add the project to your GitHub account
   1. Create a new repository at github.com. (this is your repository)
      - Give it the same name as the other repository.
      - Don't initialize it with a README, .gitignore, or license.
   2. Rename the local repository's current 'origin' to 'upstream'.
      - `git remote rename origin upstream`
   3. Give the local repository an 'origin' that points to your repository.
      - `git remote add origin https://github.com/<your-account>/<your-repository>.git>`
   4. Push the local repository to your repository on github.
      - `git push origin main`

## External Tools

In the project directory `/.project` are exported collections for [Postman](https://www.postman.com/) to test out the Express Max deployed services.
