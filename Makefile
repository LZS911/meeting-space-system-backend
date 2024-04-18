local: 
	docker-compose stop && docker-compose -p meeting_space_system_backend_dev -f docker-compose.yaml up --build -d --remove-orphans 
clean:
	chmod a+x ./scripts/clean.sh &&	./scripts/clean.sh
deploy: 
	docker run -v ${shell pwd}:/app -w /app -p 3535:3535 --name meeting_space_system_backend -d gplane/pnpm:8.15-node20 sh -c "pnpm install && pnpm build:frontend && cd packages/backend && pnpm migrate:mysql && pnpm prisma:gen && cd ../.. && pnpm build:backend && pnpm deploy:pm2"