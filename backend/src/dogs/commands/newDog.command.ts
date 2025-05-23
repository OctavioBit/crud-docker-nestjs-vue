export class NewDogCommand {
    constructor(public readonly name: string,
        public readonly sex: string,
        public readonly sterilized: boolean,
        public readonly birthdate: Date) { }
}