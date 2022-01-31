build:
		docker build -t node_starter_kit:1.0.0 .

start:
		docker run -d -p 3000:3000 --rm --name node_starter_kit node_starter_kit:1.0.0

stop:
		docker stop node_starter_kit

get:
		docker images node_starter_kit -q

remove:
		docker rmi $$(docker images node_starter_kit -q)