## Requirements

- install docker
- install docker-compose
- install make

### Setup project

1. Copy `.env.example` file and rename it to `.env`.
2. Open the terminal and go to `/etc` folder. Type `sudo nano hosts`. In opened file provide two host names for 127.0.0.1 ip address:<br/>
`127.0.0.1 helloworld.dev.gg` - dev<br/>
`127.0.0.1 helloworld.gg`- prod (you can replace with your production url)<br/>
(For windows: `C:\Windows\System32\drivers\etc\hosts`)<br />
Save the file.
3. Run `make install` to install packages.
4. Run `make up-prod` to create and start a production build (`helloworld.gg`).
5. Run `make up` to start in dev mode (`helloworld.dev.gg`).

---

**NOTE**

`nginx/nginx.conf` file by default can't access to environment variables. So, if you change something in `.env` file make sure to update `nginx.conf` and `nginx.dev.conf` accordingly.

---

## Commands:

### ✔ make install

Install all required modules

### ✔ make up-prod

Create and start a production build

### ✔ make up

Start in development mode

### ✔ make stop

Stop all running containers without removing them

### ✔ make start

Start all existing containers

### ✔ make down

Stop containers and remove containers, networks, volumes, and images created by 'up-prod' or 'up'

### ✔ make lint-client

Run linter for client

### ✔ make lint-server

Run linter for server

### ✔ make lint

Run linters for client & server

---

**NOTE**

Take a look at `.vscode/settings.json` file if you using Visual Studio Code editor. You should provide `"eslint.workingDirectories"` setting with all inner project folders that using eslint because by default eslint looking to the root folder.

---