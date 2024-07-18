import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Artista } from 'src/artista';
import { ArtistasService } from './artistas.service';

@Controller('artistas')
export class ArtistasController {
    
    constructor( private readonly servicio:ArtistasService){ }

    // Obtiene todos los artistas
    @Get()
    obtenerArtistas(): Artista[] {
        return this.servicio.obtenerArtistas();
    }

    // Obtiene un artista por su id 
    @Get(':identificador')
    obtenerArtistaPorId( @Param('identificador') idx:number ): Artista{
        return this.servicio.obtenerArtistaPorId(idx);
    }

    // Crear un artista
    @Post()
    crearArtista( @Body() artista:Artista ):void{
        this.servicio.crearArtista(artista);
    }

    // Eliminar artista
    @Delete(':id')
    eliminarArtista(@Param('id') id: number):void{
        this.servicio.eliminarArtista(id);
    }

    // Editar un artista
    @Put(':id')
    editarArtista( @Param('id') id:number, @Body() artista:Artista ):void{
        this.servicio.editarArtista(id, artista);
    }

}
