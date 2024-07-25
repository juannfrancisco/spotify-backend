import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Artista } from 'src/artista';
import { ArtistasService } from './artistas.service';
import { Response } from 'express';

@Controller('artistas')
export class ArtistasController {


    constructor(private readonly servicio: ArtistasService) {}

    // Obtiene todos los artistas
    @Get()
    obtenerArtistas(): Artista[] {
        return this.servicio.obtenerArtistas();
    }

    // Obtiene un artista por su id 
    @Get(':identificador')
    obtenerArtistaPorId(
        @Param('identificador') idx: number,
        @Res() response: Response): void {

        const artista = this.servicio.obtenerArtistaPorId(idx);
        if (artista) {
            response.status(200).send(artista);
        } else {
            response.status(404).send({ mensaje: 'Artista no encontrado' });
        }

    }

    // Crear un artista
    @Post()
    crearArtista(@Body() artista: Artista): void {
        this.servicio.crearArtista(artista);
    }

    // Eliminar artista
    @Delete(':id')
    eliminarArtista(@Param('id') id: number): void {
        this.servicio.eliminarArtista(id);
    }

    // Editar un artista
    @Put(':id')
    editarArtista(@Param('id') id: number, @Body() artista: Artista): void {
        this.servicio.editarArtista(id, artista);
    }

}
