import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
 
})
export class ItemInfoComponent implements OnInit, OnChanges {
  
  logoPreview: any;
  @Input() dadosProduto: FormGroup;
  @Input() produtoEditar;
  imagemProduto = null;
  @Input() produtoEditado: boolean;
  
  @Output() enviarProdutoEditado = new EventEmitter;
  

  constructor(private _fb: FormBuilder) { }
  
  ngOnInit() {
    // console.log(this.dadosProduto.value)
  }
  
  
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes)
    
  }

  onFileChange(event) {
    let fr = new FileReader()

    this.imagemProduto = <File>event.target.files[0]

    fr.readAsDataURL(this.imagemProduto)
    fr.onload = () => {
      // console.log('carregou')
      this.dadosProduto.addControl('logo', this._fb.control(fr.result, [Validators.required]))
      this.logoPreview = fr.result
      this.produtoEditar.logo = this.logoPreview
      // console.log(this.logoPreview)
      // console.log(this.dadosProduto.value)
    }
  }

  editarProduto(dadosProduto) {
    this.enviarProdutoEditado.emit(dadosProduto)
  }

}
