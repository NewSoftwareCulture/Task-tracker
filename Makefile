build:
		docker build -t task_tracker:1.1.0 .

start:
		docker run -d -p 3000:3000 --rm --name task_tracker task_tracker:1.1.0

stop:
		docker stop task_tracker

get:
		docker images task_tracker -q

remove:
		docker rmi $$(docker images task_tracker -q)