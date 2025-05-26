import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteDogCommand } from '../commands/deleteDog.command';
import { DogsService } from '../dogs.service';

@CommandHandler(DeleteDogCommand)
export class DeleteDogCommandHandler implements ICommandHandler<DeleteDogCommand> {
    constructor(private readonly dogsService: DogsService) { }

    async execute(command: DeleteDogCommand) {
        const { id } = command;
        await this.dogsService.deleteDog(id);        
    }
}

