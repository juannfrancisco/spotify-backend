import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Artista } from './artista';
import { Playlist } from './playlist';
import { Cancion } from './cancion';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('artistas')
  getArtistas(): Artista[] {
    return this.appService.getArtistas();
  }

  @Get('canciones')
  getCanciones(): Cancion[] {
    return this.appService.getCanciones();
  }

  @Get('playlists')
  getPlaylists(): Playlist[] {
    return this.appService.getPlaylist();
  }

  @Post('artistas')
  crearArtista(@Body() artista: Artista) {
    return this.appService.crearArtista(artista);
  }

  @Post('canciones')
  crearCancion(@Body() cancion: Cancion) {
    return this.appService.crearCancion(cancion);
  }

  @Post('playlists')
  crearPlaylist(@Body() playlist: Playlist, @Res() response: Response) {
    const resultado = this.appService.crearPlaylist(playlist);
    if (resultado == 0) {
      response.status(HttpStatus.OK).send();
    } else {
      response.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
