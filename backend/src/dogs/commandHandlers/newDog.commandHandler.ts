import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { NewDogCommand } from '../commands/newDog.command';
import { ShapeShifterService } from 'src/shapeshifter.service';

@CommandHandler(NewDogCommand)
export class NewDogCommandHandler implements ICommandHandler<NewDogCommand> {
    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(command: NewDogCommand) {
        
        // sterilized and other props are boolean, ints, etc but reaches as strings...
        const { name, sex, sterilized, birthdate } = command.getDTO();  

        const newDog = { name: name, sex: sex, sterilized: String(sterilized) == 'true', birthdate: new Date(String(birthdate)) };
        const dog = await this.shapeShifterService.new('dog', newDog);

        return dog;
    }
}

