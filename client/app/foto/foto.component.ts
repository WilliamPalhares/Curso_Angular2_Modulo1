import { Component, Input } from '@angular/core';

@Component({
      selector: 'foto',
      moduleId: module.id,
      templateUrl: './foto.component.html'
})
export class FotoComponent {
      @Input() url;
      @Input() titulo;
}