import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetPerroQuery } from '../querys/getPerroQuery.query';
import { PerrosService } from '../perros.service';
import { ObtenerPerrosQuery } from '../querys/obtenerPerrosQuery.query';

@QueryHandler(GetPerroQuery)
export class GetPerroQueryHandler implements IQueryHandler<GetPerroQuery> {
  constructor(private readonly perroService: PerrosService) { }

  async execute(query: ObtenerPerrosQuery) {
    const { nombre,
            fechaNacDesde,
            fechaNacHasta,
            sexo,
            esterilizado } = query;

    const perros = await this.perroService.findAll();

    if (perros == null)
      return 'No hay perro con ese id';
    
    return perros;
  }
}
