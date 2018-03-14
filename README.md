# ReportFilter

## Server install

### Set Environment Variables

Update *ReportFilter/config.py*, and then run:

```sh
$ export APP_SETTINGS="ReportFilter.config.DevelopmentConfig"
```

or

```sh
$ export APP_SETTINGS="ReportFilter.config.ProductionConfig"
```

Set a SECRET_KEY:

```sh
$ export SECRET_KEY="change_me"
```

### Create DB

Create the databases in `psql`:

```sh
$ psql
# create database test
# \q
```

Create the tables and run the migrations:

```sh
$ python manage.py create_db
$ python manage.py db init
$ python manage.py db migrate
```

### Run the Application

```sh
$ python manage.py runserver
```

Access the application at the address [http://localhost:5000/](http://localhost:5000/)

### Endpoints

    1. /auth/register - register 
    2. /auth/login - login
    3. /auth/logout - logout
    4. /auth/status - check on auth
    5. /reports/range - get datarange from client


## Client install

1. Fork/Clone
2. Navigate to 'client' directory
3. Install dependencies - `npm install`
4. Start the server - `ng serve`

### Endpoints

    1. /register - register 
    2. /login - login
    3. /logout - logout
    4. /status - check on auth