# My Dog House
# CRUD example using NestJS CQRS MySQL Docker

- CQRS
- Full Dockerized
- A Service layer that transform itself to handle an entity when it ~~sees it~~ passed by parameter 
- Technologies: NodeJS NestJS CQRS MySQL Vue Vite Vuetify Pinia Axios Docker
- Disclamer: I know that using a store for a CRUD is maybe too much, but I just one to try it :-)

# Installation

- (sudo) docker compose up
- IMPORTANT: The first time, the backend will wait_for_it.sh for 60 secs to give time to the db dock to get ready
make sure you wait for it too
- Open your favorite browser in the address: http://172.28.1.3:5001/ for the frontend

