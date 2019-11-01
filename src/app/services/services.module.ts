import { NgModule } from "@angular/core";
import { CadastroUsuarioService } from "./cadastro-usuario/cadastro-usuario.service";
import { LoginService } from "./login/login.service";
import { CadastroProdutosService } from "./cadastro-produtos/cadastro-produtos.service";
import { CadastrarLojaService } from "./cadastrar-loja/cadastrar-loja.service";
import { EditarPerfilService } from "./editar-perfil/editar-perfil.service";
import { HeaderService } from './header.service';
import { LojasService } from './lojas/lojas.service';
import { CarrinhoComprasService } from './carrinho-compras/carrinho-compras.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    CadastroUsuarioService,
    LoginService,
    CadastroProdutosService,
    CadastrarLojaService,
    EditarPerfilService,
    HeaderService,
    LojasService,
    CarrinhoComprasService
  ]
})
export class ServicesModule {}
