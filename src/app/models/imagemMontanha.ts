import { Montanha } from './montanha';

export class ImagemMontanha {
    id: number;
    idMontanha?: number;
    montanha: Montanha[];
    urlImagem: string;
    urlImagemHash: string;
    registroAtivo?: boolean;
    dataCriacao?: Date;
}
