import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersChelseaComponent } from './components/players/players.component';
import { ClubInfoChelseaComponent } from './components/club-info/club-info.component';
import { ChelseaService } from './services/chelsea.service';
import { ChelseaClass123 } from './classes/chelsea123';
import { PlayerTileComponent } from './components/player-tile/player-tile.component';



@NgModule({
  declarations: [
    PlayersChelseaComponent,
    PlayerTileComponent,
    ClubInfoChelseaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersChelseaComponent,       // notice that player-tile component isnt exported
    ClubInfoChelseaComponent   
  ],
  providers: [
    ChelseaService
  ]
})
export class ChelseaModule { }
