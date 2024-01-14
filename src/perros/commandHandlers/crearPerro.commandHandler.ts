import { CommandHandler, ICommandHandler} from '@nestjs/cqrs';
import { CrearPerroCommand } from '../commands/crearPerroCommand.command';
import { PerrosService } from '../perros.service';

@CommandHandler(CrearPerroCommand)
export class CrearPerroCommandHandler implements ICommandHandler<CrearPerroCommand> {
  constructor(private readonly perroService: PerrosService) {}

  async execute(command: CrearPerroCommand) {
    const { nombre, edad } = command;
    const perro = await this.perroService.create(nombre, edad);
    return perro;
  }
}
