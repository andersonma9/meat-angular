import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeaderService } from '../header.service';



@Injectable({
  providedIn: 'root'
})
export class EditarItemService {

  api: string;

  constructor(private _httpClient: HttpClient, private _headerService: HeaderService) {
    this.api = environment.apiUrl
  }


  itemById(itemId, dadosItem) {
    return this._httpClient.patch(`${this.api}/produtos/${itemId}`, dadosItem, {
      headers: this._headerService.httpOptions.headers
    })
  }

}
