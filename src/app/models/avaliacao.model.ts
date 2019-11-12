export class AvaliacaoModel {
    cliente: number;
    rating: number;
    comentario: string;
    loja: number;
    results?: Array<AvaliacaoModel>;
}