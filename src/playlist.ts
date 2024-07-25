import { Cancion } from "./cancion";

export class Playlist{
    constructor(
        public identificador: number,
        public nombre: string,
        public canciones: Cancion[],
        public fechaCreacion: Date,
        public esPrivada: boolean,
      ) {}
}