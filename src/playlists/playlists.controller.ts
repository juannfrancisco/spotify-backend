import { Controller, Get } from '@nestjs/common';
import { Playlist } from 'src/playlist';

@Controller('playlists')
export class PlaylistsController {

    private playlist:Playlist[] = [];


    @Get()
    obtenerPlaylists(){
        return this.playlist;
    }
}
