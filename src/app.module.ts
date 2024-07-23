import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesController } from './canciones/canciones.controller';
import { PlaylistsController } from './playlists/playlists.controller';
import { ArtistasController } from './artistas/artistas.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { ArtistasService } from './artistas/artistas.service';
import { CancionesService } from './canciones/canciones.service';

@Module({
  imports: [],
  controllers: [AppController, CancionesController, PlaylistsController, ArtistasController, UsuariosController],
  providers: [AppService, ArtistasService, CancionesService],
})
export class AppModule {}
