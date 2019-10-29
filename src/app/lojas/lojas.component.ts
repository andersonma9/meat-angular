import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./lojas.component.html",
  styleUrls: ["./lojas.component.scss"]
})
export class LojasComponent implements OnInit {
  listaLojas: object[] = [];
  imgLogo;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 21; i++) {
      // console.log(i)
      const randomNumber = Math.floor(Math.random() * 100);
      console.log(randomNumber);
      this.listaLojas.push({
        nome: `Loja ${i}`,
        logo: `https://picsum.photos/id/${randomNumber}/200/200`
      });
    }

    console.log(this.listaLojas);
  }
}
