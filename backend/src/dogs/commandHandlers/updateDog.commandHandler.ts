import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DogService } from '../dog.service';
import { UpdateDogCommand } from '../commands/updateDog.command';

@CommandHandler(UpdateDogCommand)
export class UpdateDogCommandHandler implements ICommandHandler<UpdateDogCommand> {
    constructor(private readonly dogsService: DogService) { }

    async execute(command: UpdateDogCommand) {
        const { id, name, sex, sterilized, birthdate } = command;
        const dog = await this.dogsService.updateDog(id, name, sex, sterilized, birthdate);
        return dog;
    }
}

