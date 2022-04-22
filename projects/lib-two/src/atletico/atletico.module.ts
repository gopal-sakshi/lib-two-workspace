import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlPlayersComponent } from './components/atl-players/atl-players.component';
import { AtlInfoComponent } from './components/atl-info/atl-info.component';



@NgModule({
  declarations: [
    AtlPlayersComponent,
    AtlInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtleticoModule { }
