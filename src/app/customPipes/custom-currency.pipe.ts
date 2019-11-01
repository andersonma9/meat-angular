import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customCurrency"
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(valor: string, ...args: any[]): any {
    let valorString = parseFloat(valor)
      .toFixed(2)
      .replace(".", ",");
    let valorFinal = `R$ ${valorString}`;

    return valorFinal;
  }
}
