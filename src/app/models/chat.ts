import { Montanha } from './montanha';

export class Chat {
    id: number;
    idMontanha?: number;
    dataCriacao?: Date;
    registroAtivo?: boolean;
    Montanha: Montanha[];
}
