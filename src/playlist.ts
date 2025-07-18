import { Cancion } from './cancion';

export class Playlist {
  id?: number;
  nombre: string;
  fechaCreacion: Date;
  canciones: Cancion[];

  constructor(
    id: number,
    nombre: string,
    fechaCreacion: Date,
    canciones: Cancion[],
  ) {
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.canciones = canciones;
  }
}
