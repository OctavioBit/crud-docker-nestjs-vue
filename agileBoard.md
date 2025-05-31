PENDIENTE
* Tests automaticos, puede ser con Jest o Vite o eso que tiene vuetify 3 
* Debugger -> https://blog.itaywol.com/dockerizing-nestjs-application-and-debugging
* Las variables del .env no las toma el archivo schema.prisma
* Ejecutar estos 3 comandos automaticamente al inicio:
    sudo docker exec -it backendnodecqrs-backend-1 npx prisma generate
    sudo docker exec -it backendnodecqrs-backend-1 npx prisma migrate dev
    sudo docker exec -it backendnodecqrs-backend-1 npx prisma db seed
* Subir vue y vuetify a 3 (ambos)

EN CURSO
* ver de que lleguen a los actions DTOs, para evitar parsear

TERMINADOS
* Backend CRUD Dogs
* Dockerizar front end
* Dockerizar Back + DB
* CQRS
* Patron Repository  + Servicio
* Auto update de archivos del backend