export class ObtenerPerrosQuery {
  constructor(public readonly nombre: string,
              public readonly fechaNacDesde: Date,
              public readonly fechaNacHasta: Date,
              public readonly sexo: string,
              public readonly esterilizado: Boolean
             ) {}                            
  }