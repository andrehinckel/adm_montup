import { Montanha } from './montanha';
import { Cidade } from './cidade';
import { Usuario } from './usuario';

export class Guia {
    id: number;
    idMontanha?: number;
    idCidade?: number;
    idUsuario?: number;
    instagram: string;
    telefone: string;
    ocupacao: string;
    codigoPostal: string;
    certificado: string;
    temCertificado: boolean;
    conhecimentoMontanha: string;
    descricaoGuia: string;
    descricaoExperiencia: string;
    montanha: Montanha[];
    usuario: Usuario;
    cidade: Cidade[];
    dataCriacao?: Date;
    registroAtivo?: boolean;
}
