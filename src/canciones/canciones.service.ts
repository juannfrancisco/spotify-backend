import { Injectable } from '@nestjs/common';
import { Cancion } from 'src/cancion';

@Injectable()
export class CancionesService {
    private canciones:Cancion[] = []

    obtenerCanciones():Cancion[]{
        return this.canciones
    }
}
