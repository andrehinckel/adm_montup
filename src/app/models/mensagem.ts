import { Guia } from './Guia';
import { Chat } from './Chat';
import { Usuario } from './usuario';

export class Mensagem {
    id: number;
    idChat?: number;
    idUsuario?: number;
    idGuia?: number;
    texto: string;
    guia: Guia[];
    chat: Chat[];
    usuario: Usuario[];
    dataCriacao?: Date;
    registroAtivo?: boolean;
}
