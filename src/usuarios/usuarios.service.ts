import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario';

@Injectable()
export class UsuariosService {
    
    
    private usuarios:Usuario[] = [];

    obtenerUsuarioPorId(nombreUsuario: string) {
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].nombreUsuario === nombreUsuario) {
                return this.usuarios[i];
            }
        }
        return null; // no se encontró el usuario
    }

    crearUsuario(usuario:Usuario):Usuario {
       let findUser = this.obtenerUsuarioPorId(usuario.nombreUsuario);
       if(findUser){
           return null;
       }else{
        this.usuarios.push(usuario);
        return usuario;
       }
    }
}
