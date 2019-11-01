import { EnderecoModel } from "../../models/endereco.model";

export class UserModel {
  user: User;
  nome: string;
  sobrenome: string;
  cpf: string;
  rg: string;
  data_nascimento: string;
  sexo: string;
  endereco: EnderecoModel;
}

interface User {
  username: string;
  email: string;
}
