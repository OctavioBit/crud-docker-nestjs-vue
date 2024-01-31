import { Injectable } from '@nestjs/common';
const PerroModel = require('/src/backendnodecqrs/src/data/models/perro.js');

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
        var nuevoPerro = PerroModel.create(unPerro);
       
        return nuevoPerro;
    }

    findById(id: number) : Perro {
        return this.perros.find(perro => perro.id == id);
    }
}
