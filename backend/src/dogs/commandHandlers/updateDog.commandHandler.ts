import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateDogCommand } from '../commands/updateDog.command';
import { ShapeShifterService } from 'src/shapeshifter.service';

@CommandHandler(UpdateDogCommand)
export class UpdateDogCommandHandler implements ICommandHandler<UpdateDogCommand> {
    constructor(private readonly shapeShifterService: ShapeShifterService) { }

    async execute(command: UpdateDogCommand) {

        // sterilized and other props are boolean, ints, etc but reaches as strings...
        const { name, sex, sterilized, birthdate } = command.getDTO();  
        const { id } = command.getDTO();
        const dogId = String(id);

        const updateDog = { name: name, sex: sex, sterilized: String(sterilized) == 'true', birthdate: new Date(String(birthdate)) };
        const updatedDog = await this.shapeShifterService.updateById('dog', parseInt(dogId), updateDog);
        return updatedDog;
    }
}

