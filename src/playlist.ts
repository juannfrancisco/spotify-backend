import { Cancion } from "./cancion";

export class Playlist{
    constructor(
        public id: number,
        public nombre: string,
        public canciones: Cancion[],
        public fechaCreacion: Date
      ) {}
}