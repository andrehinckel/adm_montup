import { MontanhaCategoria } from './montanhaCategoria';
import { Comentario } from './Comentario';

export class Montanha {
    id: number = 0;
    montanhasCategoria: MontanhaCategoria[];
    comentario: Comentario;
    idMontanhaCategoria: number;
    nome: string;
    altitude: string;
    extensao: string;
    duracao: string;
    nivel: string;
    idadeMinima: number;
    descricao: string;
    avaliacao: number;
    latitude: number;
    longitude: number;
    dataCriacao?: Date;
    registroAtivo?: boolean;
}
