
docker build -t tripproxy .
docker run -it -p 4200:4200 --name tripweball --rm tripproxy

docker tag tripproxy:latest tinaxing414/tripadvisor-traveler-booking:tripproxy
docker push tinaxing414/tripadvisor-traveler-booking:tripproxy