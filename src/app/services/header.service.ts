import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  auth: string;

  constructor() {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: ""
    })
  };
}
