# Create a production build
deploy:
	docker-compose up --build -d

# Start in development mode
up:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml up --build

# Stop all running containers without removing them
stop:
	docker-compose stop

# Start all existing containers
start:
	docker-compose start

# Stop containers and remove containers, networks, volumes, and images created by 'deploy' or 'up' 
down:
	docker-compose down --rmi all -v 


