import { Injectable } from '@nestjs/common';
import Connection from '../data/connection';
import Travel from '../data/models/Travel';

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

    crearTravel(name: string, number_of_days: number){
        Connection.models;
        Travel.sync();
        Travel.create({name: name, number_of_days: number_of_days, createdAt: new Date(), updatedAt: new Date()});
    }

    getAllTravels(){
        return Travel.findAll();
    }
}
