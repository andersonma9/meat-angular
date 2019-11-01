import { ProdutoVenda } from './produto-venda.model';

export class VendaModel {
    id?: number;
    cliente?: number;
    loja: number;
    valor_total?: number;
    vendas_produtos: Array<ProdutoVenda>;
}