# Node.js authentication-passport Repository.

## Installation

### Go through the following steps to setup application

**Clone repo**
```
git git@github.com:Ismail-dev-neotech/authentication-passport.git
OR
git clone https://github.com/Ismail-dev-neotech/authentication-passport.git
cd authentication-passport/
```

**Create ENV specific config file**
```
touch config/env/<NODE_ENV>.js
```

**Add this content to your config/env/<NODE_ENV>.js file**


**Add db file path in config**
```
open config/env/<NODE_ENV>.js
Find the key 'dbConnection' and set the parameters of the app database
```

**Install nodemon module**
```
npm install -g nodemon
```

**Install dependencies**
```
npm install
```

**Set ENV Variables**
```
sudo vi $HOME/.bashrc
```
**Set the env variables in .bashrc**
```
export AUTHENTICATION_PASSPORT_DB_USER="name_of_the_user"
export AUTHENTICATION_PASSPORT_DB_PWD="password_of_the_user"
```
**Reload .bashrc**
```
. $HOME/.bashrc
```

**Start the server**
```
npm start
```

### View application on browser - https://localhost:3000
