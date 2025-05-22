export class GetByIdDogQuery {
    constructor(private readonly id: number) { }

    getId() {
        return this.id;
    }
}