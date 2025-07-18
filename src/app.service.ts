import { Injectable } from '@nestjs/common';
import { Artista } from './artista';
import { Playlist } from './playlist';
import { Cancion } from './cancion';

@Injectable()
export class AppService {
  artistas: Artista[] = [];
  canciones: Cancion[] = [];
  playlists: Playlist[] = [];

  getCanciones(): Cancion[] {
    return this.canciones;
  }

  getArtistas(): Artista[] {
    return this.artistas;
  }

  getPlaylist(): Playlist[] {
    return this.playlists;
  }

  crearCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }

  crearArtista(artista: Artista) {
    this.artistas.push(artista);
  }

  crearPlaylist(playlist: Playlist): number {
    for (let i = 0; i < this.playlists.length; i++) {
      if (this.playlists[i].nombre === playlist.nombre) {
        return 1;
      }
    }
    this.playlists.push(playlist);
    return 0;
  }
}
