local: 
	docker-compose stop && docker-compose -f docker-compose.yaml up --build -d --remove-orphans
clean:
	chmod a+x ./scripts/clean.sh &&	./scripts/clean.sh

build-server:
	docker-compose -f docker-compose.server.yaml stop && docker-compose -f docker-compose.server.yaml up --build -d --remove-orphans
  