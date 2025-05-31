import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateDogCommand } from '../commands/updateDog.command';
import { ShapeShifterService } from 'src/shapeshifter.service';

@CommandHandler(UpdateDogCommand)
export class UpdateDogCommandHandler implements ICommandHandler<UpdateDogCommand> {
    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(command: UpdateDogCommand) {
        const { name, sex, sterilized, birthdate } = command;  
        const { id } = command;

        const updateDog = { name, sex, sterilized, birthdate };

        const updatedDog = await this.shapeShifterService.updateById('dog', id, updateDog);
        return updatedDog;
    }
}

