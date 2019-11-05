import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { ProdutoCadastroModel } from 'src/app/models/produto-cadastro.model';
import { CadastroProdutosService } from '../../../services/cadastro-produtos/cadastro-produtos.service';
import { HeaderService } from '../../../services/header.service';


@Component({
  selector: "app-cadastrar-itens",
  templateUrl: "./cadastrar-itens.component.html",
  styleUrls: ["./cadastrar-itens.component.scss"]
})
export class CadastrarItensComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _activatedRoute: ActivatedRoute, private _cadastroProdutoService: CadastroProdutosService, private _headerService: HeaderService) {}

  dadosItem: FormGroup;

  ngOnInit() {
    this.dadosItem = this._fb.group({
      descricao: this._fb.control("", [Validators.required]),
      valor: this._fb.control("", [Validators.required]),
      qtd_estoque: this._fb.control("", [Validators.required]),
      loja: this._fb.control(this._activatedRoute.parent.snapshot.params['id'])
    });
  }

  cadastrarProduto(produto: ProdutoCadastroModel) {
    // console.log(this._headerService.httpOptions.headers.getAll('Authorization'))
    this._cadastroProdutoService.cadastrarProduto(produto).subscribe()
  } 
}
