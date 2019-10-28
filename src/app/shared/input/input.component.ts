import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { FormControlName } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit, AfterContentInit {
  // @ContentChild(FormControlName) control: FormControlName;
  constructor() {}

  ngOnInit() {}

  input: any;

  ngAfterContentInit(): void {
    // this.input = this.control;
    if (this.input === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com uma diretiva ngModel ou formControlName"
      );
    }
  }
}
