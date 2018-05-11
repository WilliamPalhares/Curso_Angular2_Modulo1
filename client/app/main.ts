//É uma instância dessa classe que será responsável pelo carregamento do nosso AppModule. 
//Por exemplo, se estivéssemos criando uma aplicação híbrida com Ionic 2, carregaríamos nosso 
//módulo de outra forma.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Importar nosso módulo AppModule
import { AppModule } from './app.module';

//vamos criar uma instância de platformBrowserDynamic. Como não faz sentido reatribuirmos o 
//valor dessa variável, usaremos o modificador const do ES6
const platform = platformBrowserDynamic();

//vamos pedir para nossa instância carregar o módulo
platform.bootstrapModule(AppModule);