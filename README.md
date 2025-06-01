# mono-boilerplate
This is the full-stack boilerplate (frontend and backend) built by me to make setting up small project simpler and faster.

## Creating new project from mono-boilerplate
#### -Create new remote repo in GitHub
#### -Create new local repo in desired location with the same name
#### -Copy boilerplate code directly into local repo
#### -Update repo name from mono-boilerplate
#### -Initialise repo
#### -Run initial commit, add remote repo and install packages
  git commit -m 'copy boilerplate'
  git remote add origin https://github.com/pearlolvia/REPOSITORY.git
  git push -u origin BRANCH_NAME
  yarn
  yarn install:all
#### -Add .env files from client and server
  -server: DB_STRING, PORT_NUMBER
  -client: VITE_API_URL
