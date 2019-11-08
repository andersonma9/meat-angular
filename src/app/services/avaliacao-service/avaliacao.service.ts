import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HeaderService } from '../header.service';
import { Observable } from 'rxjs';
import { AvaliacaoModel } from 'src/app/models/avaliacao.model';


@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  api: string;

  constructor(private _httpClient: HttpClient, private _headerService: HeaderService) {
    this.api = environment.apiUrl
  }

  sendReview(avaliacao): Observable<AvaliacaoModel> {
    console.log(avaliacao)
    return this._httpClient.post<AvaliacaoModel>(`${this.api}/avaliacoes/`, avaliacao, { headers: this._headerService.httpOptions.headers })
  }
}
