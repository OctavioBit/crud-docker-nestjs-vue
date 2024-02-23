import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export interface Perro {
    id: number;
    nombre: string;
    edad: number;
}

@Injectable()
export class PerrosService {
    private readonly perros : Perro[] = [];

    create(nombre: string, edad: number) : Perro {

        var unPerro = {
            nombre: nombre,
            edad: edad,
            esterilizado: true
        };
         
        //TypeError: PerroModel.create is not a function
        var nuevoPerro = null;//PerroModel.create(unPerro);
       
        return nuevoPerro;
    }

    findById(id: number) : Perro {
        return this.perros.find(perro => perro.id == id);
    }

    async crearUser(nombre: string, mail:string) : Promise<void> {
        const user = await prisma.user.create({
            data: {
                email: mail,
                name: nombre,
            },
        });
    }

    findAll() : void {

        const allUsers = prisma["user"].findMany();

        allUsers.then(res => console.log(res));
    }
}
