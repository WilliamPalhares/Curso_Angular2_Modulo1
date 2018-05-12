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
    //Criando uma lista de objetos.
    fotos: Object[] = [];

    //TypeScript Para tipar uma variavel colocar : e o seu tipo
    //Ex: let nome: string
    //Com isso estou utilizando a Injeção de Dependencia
    constructor (http: Http) {
        //Realizando um Get para obter a lista de fotos
        //Seu retorno é um tipo observable stream
        http.get('v1/fotos')

        //Realizo a conversão do objeto atraves do Map
        //Trato a resposta da requisição aqui
        .map(res => res.json())
        
        //Sobrescrever o retorno da função
        .subscribe(fotos => {
            //atribuo a lista de fotos em formato Json
            this.fotos = fotos;
        }, 
        //Apresentando o erro na console
        error => console.log(error));
    }
}