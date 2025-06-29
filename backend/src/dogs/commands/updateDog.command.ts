import { DogDTO } from "../dogDTO";

export class UpdateDogCommand {
    constructor(private readonly dogDTO : DogDTO) { }

    getDTO(){
        return this.dogDTO;
    }
}