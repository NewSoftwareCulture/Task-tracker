echo "release started!"
docker build -t task_tracker:1.1.0 .
heroku container:push web --app task-tracker-01
heroku container:release web --app task-tracker-01
echo "release completed!"