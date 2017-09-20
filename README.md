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
export DB_USER="name_of_the_mongodb_user"
export DB_PASSWORD="password_of_the_mongodb_user"
export DB_HOST="your_mongodb_host"
export DB_PORT="your_mongodb_port"
export DB_NAME="your_mongodb_database_name"
```
**Reload .bashrc**
```
. $HOME/.bashrc
```

**Start the server**
```
npm start
```

### View application on browser - http://127.0.0.1:3000
