import { Controller, Get } from '@nestjs/common';
import { CancionesService } from './canciones.service';

@Controller('canciones')
export class CancionesController {

    constructor(private readonly cancionesService:CancionesService){}

    @Get()
    obtenerCanciones(){
        return this.cancionesService.obtenerCanciones();
    }

}
