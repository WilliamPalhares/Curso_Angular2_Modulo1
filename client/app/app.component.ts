import { Component } from '@angular/core';  //Importando a biblioteca Angular Core
import { Http } from '@angular/http';       //Importando a biblioteca Angular Http para Requisição

//Decorator => Utilizando como uma anotação da classe
//esse decorator vem do import do Component do angular core
@Component({
    moduleId: module.id,                    //Faz com que o componente procure o template relativo à sua pasta.
    selector: 'app',                        //Nome do seu seletor html ex: <app></app>
    templateUrl: './app.component.html'     //Caminho do template utilizado pelo componente
})

//Export - Só temos acesso a classes ou qualquer outro 
//artefato dentro de um módulo do ES6 se utilizarmos a sintaxe export
export class AppComponent {

    //TypeScript Para tipar uma variavel colocar : e o seu tipo
    //Ex: let nome: string
    //Com isso estou utilizando a Injeção de Dependencia
    constructor (http: Http) {
        
    }
}