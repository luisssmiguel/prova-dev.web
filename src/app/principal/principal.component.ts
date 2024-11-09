import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})
export class PrincipalComponent implements OnInit {
  usuarios: any[] = [];
  filtroNome: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  filtrarUsuarios() {
    this.usuarios = this.usuarios.filter(usuario =>
      usuario.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
    );
  }
}