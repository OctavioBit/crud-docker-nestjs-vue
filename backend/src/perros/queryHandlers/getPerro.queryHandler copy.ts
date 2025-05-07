import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ObtenerPerrosQuery } from '../querys/obtenerPerrosQuery.query';
import { PerrosService } from '../perros.service';

@QueryHandler(ObtenerPerrosQuery)
export class ObtenerPerrosQueryHandler implements IQueryHandler<ObtenerPerrosQuery> {
  constructor(private readonly perroService: PerrosService) { }

  async execute(query: ObtenerPerrosQuery) {
    const { id } = query;
    const perro = await this.perroService.findAll();

    if(perro == null)      
      return 'No hay perro con ese id';
    
    return perro;
  }
}
