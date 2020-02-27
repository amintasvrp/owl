# owl
A REST API focused on providing chat communication services

# RUN APP STANDALONE LOCAL

`npm run dev`

# PERMISSION TO USER (WHEN IT'S NEEDED)

you can use `sudo docker` or

` sudo chown -R 1000:1000 "/var/run/docker.sock"`

# BUILD DOCKER IMAGE

`docker build -t username/dockernode .`

# RUN APP DOCKER CONTAINER

`docker run -p 3000:port -d username/dockernode`

# CHECK DOCKER IMAGE RUNNING

`docker ps`

# RUN DOCKER IMAGE WITH DOCKER COMPOSE FOR DEV (RECOMMENDED)

`docker-compose up`

# REMOVE DOCKER CONTAINER

`docker rm <container-id>`

# CLEAN ALL DOCKER DATA

`docker system prune --all --force --volumes`
