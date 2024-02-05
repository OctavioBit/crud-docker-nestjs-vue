import { Injectable } from '@nestjs/common';
//import PerroModel from '../data/models/perro';

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
}
