import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteDogCommand } from '../commands/deleteDog.command';
import { DogService } from '../dog.service';

@CommandHandler(DeleteDogCommand)
export class DeleteDogCommandHandler implements ICommandHandler<DeleteDogCommand> {
    constructor(private readonly dogsService: DogService) { }

    async execute(command: DeleteDogCommand) {
        const { id } = command;
        await this.dogsService.deleteDog(id);        
    }
}

