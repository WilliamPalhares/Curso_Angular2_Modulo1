import { NgModule } from '@angular/core';                   //Importando a biblioteca Angular Core

//Importando a biblioteca Angular Core, BrowserModule ao ser carregado, já disponibiliza diversos recursos 
//padrões do Angular sem termos que importar cada recurso individualmente como as diretivas
import { BrowserModule } from '@angular/platform-browser';  

import { AppComponent } from './app.component';             //Importando a Componente
import { FotoModule } from './foto/foto.module';            //Importando o modulo de foto
import { HttpModule } from '@angular/http';                 //Importando a biblioteca de Requisições

import 'rxjs/add/operator/map';

//Decorator -> Esse é o decoretor do Modulo da aplicação
@NgModule({
    imports: [ BrowserModule, FotoModule, HttpModule ],     //Isso indica que um módulo anotado com 
                                                            //ngModule pode importar outros módulos 
                                                            //também anotados com ngModule.

    declarations: [ AppComponent ],                         //Todos os componentes que fizerem parte do módulo, 
                                                            //precisam ser registrados.

    bootstrap: [ AppComponent ]                             //vamos importar nosso componente e 
                                                            //adicioná-lo nas propriedades.
})  

//Export - Só temos acesso a classes ou qualquer outro 
//artefato dentro de um módulo do ES6 se utilizarmos a sintaxe export
export class AppModule {

}