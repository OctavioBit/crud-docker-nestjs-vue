import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NewDogCommand } from '../commands/newDog.command';
import { DogsService } from '../dogs.service';

@CommandHandler(NewDogCommand)
export class NewDogCommandHandler implements ICommandHandler<NewDogCommand> {
    constructor(private readonly dogsService: DogsService) { }

    async execute(command: NewDogCommand) {
        const { name, sex, sterilized, birthdate } = command;
        const dog = await this.dogsService.newDog(name, sex, sterilized, birthdate);
        return dog;
    }
}

