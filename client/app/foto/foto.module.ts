import { NgModule } from '@angular/core';           //Importando a biblioteca Angular Core
import { FotoComponent } from './foto.component';   //Importando o Componente de Foto
import { FiltroPorTitulo } from './foto.pipes';

//Decorator -> Esse é o decoretor do Modulo de Foto
@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ],
    exports: [ FotoComponent, FiltroPorTitulo ]
})

//Export - Só temos acesso a classes ou qualquer outro 
//artefato dentro de um módulo do ES6 se utilizarmos a sintaxe export
export class FotoModule {

}