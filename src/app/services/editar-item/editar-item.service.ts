import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../header.service';
import { Observable } from 'rxjs';
import { ProdutosModel } from 'src/app/models/produtos.model';



@Injectable({
  providedIn: 'root'
})
export class EditarItemService {

  api: string;

  constructor(private _httpClient: HttpClient, private _headerService: HeaderService) {
    this.api = environment.apiUrl
  }

  listaProdutos(idLoja, pag?): Observable<ProdutosModel> {
    return this._httpClient.get<ProdutosModel>(`${this.api}/lojas/${idLoja}/produtos`, {params: {page: pag}});
  }


  editarItem(itemId, dadosItem) {
    return this._httpClient.patch(`${this.api}/produtos/${itemId}/`, dadosItem, {
      headers: this._headerService.httpOptions.headers
    })
  }

}
