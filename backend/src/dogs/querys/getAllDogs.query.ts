import { DogsFilters } from "../dogs.filters";

export class GetAllDogsQuery {
    constructor(private readonly filters: DogsFilters) { }

    getFilters(){
        return this.filters;
    }
}