import { Montanha } from './montanha';
import { Usuario } from './usuario';

export class Comentario {
    id: number;
    idUsuario?: number;
    idMontanha?: number;
    comentarioTexto: string;
    dataComentario: Date;
    dataCriacao?: Date;
    registroAtivo: boolean;
    montanha: Montanha;
    usuario: Usuario;
}
