import { NgModule } from '@angular/core';                   //Importando a biblioteca Angular Core
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Importando a biblioteca Angular Core, BrowserModule ao ser carregado, já disponibiliza diversos recursos 
//padrões do Angular sem termos que importar cada recurso individualmente como as diretivas
import { BrowserModule } from '@angular/platform-browser';  

import { AppComponent } from './app.component';                     //Importando a Componente
import { CadastroComponent } from './cadastro/cadastro.component';  //Importando o Cadastro
import { ListagemComponent } from './listagem/listagem.component';  //Importando a Listagem
import { FotoModule } from './foto/foto.module';                    //Importando o modulo de foto
import { HttpModule } from '@angular/http';                         //Importando a biblioteca de Requisições

import { routing } from './app.routes';

import 'rxjs/add/operator/map';

import { PainelModule } from './painel/painel.module';

//Decorator -> Esse é o decoretor do Modulo da aplicação
@NgModule({
    imports: [ BrowserModule, 	//Isso indica que um módulo anotado com
               FotoModule, 		//ngModule pode importar outros módulos
               HttpModule, 		//também anotados com ngModule.
               routing,	
               FormsModule,	
               ReactiveFormsModule,								
               PainelModule ],     							
                            
    declarations: [ AppComponent, CadastroComponent, ListagemComponent ],                         
                                                            //Todos os componentes que fizerem parte do módulo, 
                                                            //precisam ser registrados.

    bootstrap: [ AppComponent ]                             //vamos importar nosso componente e 
                                                            //adicioná-lo nas propriedades.
})  

//Export - Só temos acesso a classes ou qualquer outro 
//artefato dentro de um módulo do ES6 se utilizarmos a sintaxe export
export class AppModule {

}