import { Injectable } from '@nestjs/common';
import { Artista } from 'src/artista';

@Injectable()
export class ArtistasService {

    private artistas: Artista[] = [];


    obtenerArtistas(): Artista[] {
        return this.artistas;
    }

    obtenerArtistaPorId( idx:number ): Artista{
        for(let i = 0; i < this.artistas.length; i++){
            if(this.artistas[i].id == idx){
                return this.artistas[i];
            }
        }
        return null; 
    }

    crearArtista( artista:Artista ):void{
        artista.id = this.artistas.length + 1;
        this.artistas.push(artista);
    }


    eliminarArtista(id: number):void{
        for(let i = 0; i < this.artistas.length; i++){
            if(this.artistas[i].id == id){
                this.artistas.splice(i, 1);
            }
        }
    }


    editarArtista( id:number, artista:Artista ):void{
        let artistaEncontrado: Artista = this.obtenerArtistaPorId(id);
        artistaEncontrado.nombre = artista.nombre;
        artistaEncontrado.generoMusical = artista.generoMusical;      
    }



    

}
