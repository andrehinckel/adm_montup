
import { Categoria } from './Categoria';
import { Montanha } from './montanha';

export class MontanhaCategoria {
    id: number;
    idCategoria?: number;
    idMontanha?: number;
    categoria: Categoria;
    montanha: Montanha[];
    dataCriacao?: Date;
    registroAtivo?: boolean;
}

