import { DogFilters } from "../dog.filters";

export class GetAllDogsQuery {
    constructor(private readonly filters: DogFilters) { }

    getFilters(){
        return this.filters;
    }
}