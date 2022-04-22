import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.css']
})
export class PlayerTileComponent implements OnInit {

  @Input() name:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
