import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    this.usuarioService.getUsuario(this.email, this.senha).subscribe(
      (usuarios) => {
        if (usuarios.length) {
          this.router.navigate(['/principal']);
        } else {
          this.erro = 'E-mail ou senha inválido!';
        }
      }
    );
  }
}
