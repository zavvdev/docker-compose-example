Dockerized full-stack starter project.

## Requirements

- install docker
- install docker-compose
- install make

### Setup project

1. Copy `.env.example` file and rename it to `.env`.
2. Open the terminal and go to `/etc` folder of your linux machine. Type `sudo nano hosts`. In opened file provide one more host name for 127.0.0.1 ip address: `127.0.0.1 nnn-docker.com`. Save the file.
3. Open terminal in the root project folder. Type `make deploy` to create production build via docker.
4. Deployed application will be available on the `nnn-docker.com` address that you previously specified.

---

**NOTE**

`nginx/nginx.conf` file by default can't access to environment variables. So, if you change something in `.env` file make sure to update nginx.conf accordingly.

---

## Commands:

### ✔ make deploy

Create a production build

### ✔ make up

Start in development mode

### ✔ make stop

Stop all running containers without removing them

### ✔ make start

Start all existing containers

### ✔ make down

Stop containers and remove containers, networks, volumes, and images created by 'deploy' or 'up'

---

**NOTE**

Take a look at `.vscode/settings.json` file if you using Visual Studio Code editor. You should provide `"eslint.workingDirectories"` setting with all inner project folders that using eslint because by default eslint looking to the root folder.

---

**NOTE**

Create `*.local` copies of the `.env` files for local development.

---
