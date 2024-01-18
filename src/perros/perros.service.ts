import { Injectable } from '@nestjs/common';

export interface Perro {
    id: number;
    nombre: string;
    edad: number;
}

@Injectable()
export class PerrosService {
    private readonly perros : Perro[] = [];

    create(nombre: string, edad: number) : Perro {

        let perro = {
                        id: this.perros.length + 1,
                        nombre: nombre, 
                        edad:edad
                    };
                    
        this.perros.push(perro);
        return perro;
    }

    findById(id: number) : Perro {
        return this.perros.find(perro => perro.id == id);
    }
}
