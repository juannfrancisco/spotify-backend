import { Injectable } from '@nestjs/common';
import { Playlist } from 'src/playlist';

@Injectable()
export class PlaylistsService {
    private playlists:Playlist[] = []

    obtenerPlaylists():Playlist[]{
        return this.playlists
    }


}
