import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula3';
  tarefas: Tarefa[] = [
    {descricao: "Criar lista", concluida: true},
    {descricao: "Fazer botões", concluida: true},
    {descricao: "Criar repositório", concluida: true},
    {descricao: "Colocar código", concluida: false},
    {descricao: "Mandar link", concluida: false},
  ]
}
interface Tarefa {
  descricao: string;
  concluida: boolean;
}