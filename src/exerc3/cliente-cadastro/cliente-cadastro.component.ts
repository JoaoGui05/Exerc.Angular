import { Component } from '@angular/core';

interface Cliente {
  id: number;
  nome: string;
  email: string;
  idade: number;
}

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent {
  clientes: Cliente[] = []; // Array para armazenar os clientes cadastrados

  // Função para cadastrar cliente
  cadastrarCliente(id: string, nome: string, email: string, idade: string) {
    const novoCliente: Cliente = {
      id: Number(id),
      nome: nome,
      email: email,
      idade: Number(idade)
    };

    console.log("Cliente cadastrado:", novoCliente);
    this.clientes.push(novoCliente); // Adiciona o cliente ao array
  }
}