import { Component, Input } from '@angular/core';           //Importando a biblioteca Angular Core

//Decorator => Utilizando como uma anotação da classe
//esse decorator vem do import do Component do angular core
@Component({
      selector: 'foto',                         //Nome do seu seletor html ex: <foto></foto>
      moduleId: module.id,                      
      templateUrl: './foto.component.html'      //Caminho do template utilizado pelo componente
})

//Export - Só temos acesso a classes ou qualquer outro 
//artefato dentro de um módulo do ES6 se utilizarmos a sintaxe export
export class FotoComponent {
      @Input() url;         //Parametro de entrada de dados atraves do atributo <foto url={{url}}></foto>
      @Input() titulo;      //Parametro de entrada de dados atraves do atributo <foto titulo={{titulo}}></foto>
}