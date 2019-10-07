import { Cidade } from './cidade';
import { Montanha } from './montanha';

export class Local {
    id: number;
    idCidade?: number;
    idMontanha?: number;
    nome: string;
    descricao: string;
    dataCriacao?: Date;
    registroAtivo?: boolean;
    cidade: Cidade[];
    montanha: Montanha[];
}
