import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetPerroQuery } from '../querys/getPerroQuery.query';
import { PerrosService } from '../perros.service';

@QueryHandler(GetPerroQuery)
export class GetPerroQueryHandler implements IQueryHandler<GetPerroQuery> {
  constructor(private readonly perroService: PerrosService) { }

  async execute(query: GetPerroQuery) {
    const { id } = query;
    const perro = await this.perroService.getAllTravels();

    if(perro == null)      
      return 'No hay perro con ese id';
    
    return perro;
  }
}
