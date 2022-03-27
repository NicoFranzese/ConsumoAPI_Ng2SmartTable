import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent {
  constructor( public router: Router) {}

  public Ingresar(){
    this.router.navigate(['entidades']);
  }

}
