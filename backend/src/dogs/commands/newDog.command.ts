import { DogDTO } from "../dogDTO";

export class NewDogCommand {
    constructor(private readonly dogDTO:DogDTO) { }

    getDTO(){
        return this.dogDTO;
    }
}