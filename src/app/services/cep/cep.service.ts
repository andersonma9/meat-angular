import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { CepModel } from 'src/app/models/cep-info.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  apiUrl = "http://viacep.com.br/ws"

  constructor(private _httpClient: HttpClient) { }

  getCepInfo(cep): Observable<CepModel> {
    return this._httpClient.get<CepModel>(`${this.apiUrl}/${cep}/json`)/* .pipe(
      catchError(
        err => {return of([])}
      )
    ) */
  }
}
