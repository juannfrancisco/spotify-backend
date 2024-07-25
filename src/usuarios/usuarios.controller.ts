import { Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Usuario } from 'src/usuario';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private readonly usuariosService:UsuariosService) {
    }


    @Get()
    obtenerUsuarios( @Res() response :Response ) {
       
    }

    @Post()
    crearUsuario( @Res() response :Response ):Usuario {
        return null;
    }


    @Get(':nombreUsuario')
    obtenerUsuarioPorId( 
        @Param('nombreUsuario')nombreUsuario:string, 
        @Res() response:Response ):void {
            let usuario = this.usuariosService.obtenerUsuarioPorId(nombreUsuario);
            if(usuario) {
                response.status(HttpStatus.OK).send(usuario);
            }else{
                response.status(404).send();
            }
    }
}
