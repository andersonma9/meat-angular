import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cadastrar-itens",
  templateUrl: "./cadastrar-itens.component.html",
  styleUrls: ["./cadastrar-itens.component.scss"]
})
export class CadastrarItensComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  dadosItem: FormGroup;

  ngOnInit() {
    this.dadosItem = this._fb.group({
      descricao: this._fb.control("", [Validators.required]),
      valor: this._fb.control("", [Validators.required]),
      quantidade: this._fb.control("", [Validators.required])
    });
  }
}
