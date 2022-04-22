import { Component, OnInit } from '@angular/core';
import { ChelseaClass123 } from '../../classes/chelsea123';
import { ChelseaService } from '../../services/chelsea.service';

@Component({
  selector: 'lib-players-chelsea',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersChelseaComponent extends ChelseaClass123 implements OnInit {

  players:string[] = ['lukaku', 'rudiger', 'mason mount', 'werner'];

  constructor(private chelseaService: ChelseaService) { 
    super();
  }

  ngOnInit(): void {
  }

  getTitles() {
    console.log(this.chelseaService.getTitles());
  }

}
