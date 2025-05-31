import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NewDogCommand } from '../commands/newDog.command';
import { ShapeShifterService } from 'src/shapeshifter.service';

@CommandHandler(NewDogCommand)
export class NewDogCommandHandler implements ICommandHandler<NewDogCommand> {
    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(command: NewDogCommand) {
        
        const { name, sex, sterilized, birthdate } = command;
        const newDog = { name, sex, sterilized, birthdate };

        const dog = await this.shapeShifterService.new('dog', newDog);

        return dog;
    }
}

