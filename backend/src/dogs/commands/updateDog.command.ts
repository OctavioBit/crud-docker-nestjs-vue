export class UpdateDogCommand {
    constructor(public readonly id: number,
                public readonly name: string,
                public readonly sex: string,
                public readonly sterilized: boolean,
                public readonly birthdate: Date) { }
}