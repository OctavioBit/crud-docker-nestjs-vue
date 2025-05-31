import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteDogCommand } from '../commands/deleteDog.command';
import { ShapeShifterService } from 'src/shapeshifter.service';

@CommandHandler(DeleteDogCommand)
export class DeleteDogCommandHandler implements ICommandHandler<DeleteDogCommand> {
    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(command: DeleteDogCommand) {
        const { id } = command;
        await this.shapeShifterService.delete("dog",id);
    }
}