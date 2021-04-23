# Challenge-todos
### BE and FE application.

## Installation guide

### 1. Install dependencies
To get started, make sure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your system, and then clone this repository.

Run this command in order to build both images for frontend and backend
```sh
$ docker-compose build
```

### 2. Create the containers for db, backend & frontend
Run this command to download images for mysql and phpmyadmin and create backend and client containers
```sh
$ docker-compose up -d
```

Bringing up the Docker containers will open following ports in your computer (if you already have them running you may need to turn that service off, like mysql):

- **phpmyadmin** - `:8080`
- **mysql** - `:3306`
- **backend** - `:9000`
- **frontend** - `:3000`


### 3. Run the application
When you get the containers running you will be able to run the application locally in the following urls and ports:

- **phpmyadmin** - [http://localhost:8080](http://localhost:8080)
- **NodeJS API** - [http://localhost:9000](http://localhost:9000)
- **React Todo App** - [http://localhost:3000](http://localhost:3000)

