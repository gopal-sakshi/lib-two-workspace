import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PlayersChelseaComponent } from 'lib-two';
// imported PlayersChelseaComponent ---> to verify whether we can skip importing the whole module


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  useFromHtml:boolean = false;
  title = 'app-one';

  constructor(
    private router:Router
  ) {}

  useOtherWay() {
    this.router.navigate(['/libComponent'])
  }
}
