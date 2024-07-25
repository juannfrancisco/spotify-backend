import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';


@Controller('playlists')
export class PlaylistsController {

    constructor(private readonly playlistsService:PlaylistsService){}

    @Get()
    obtenerPlaylists(
        @Query('nombre') nombre: string,
        @Query('privada') privada: boolean){
        return this.playlistsService.obtenerPlaylists();
    }
}
