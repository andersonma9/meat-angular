import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // let cep = document.getElementById("inputCep");
    // cep.addEventListener("keyup", () => {
    //   if (cep.value.length === 8) {
    //     let stringCep = cep.value.toString();
    //     let splited = stringCep.split("");
        
    //     console.log(splited.toString().join())

        
    //   }
    // });
  }
}
