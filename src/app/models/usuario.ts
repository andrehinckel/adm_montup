import { Guia } from './guia';
import { Comentario } from './Comentario';

export class Usuario {
    id: number;
    idGuia?: number;
    guia?: Guia;
    comentarios: Comentario[];
    userName: string;
    sobrenome: string;
    cpf?: string;
    dataNascimento?: Date;
    email: string;
    password: string;
    dataCriacao?: Date;
    registroAtivo?: boolean;
    imagemUsuario?: string;
    imagemHash?: string;
}
