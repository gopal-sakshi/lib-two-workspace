import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtlPlayersComponent } from 'lib-two';

import { AppClubInfoComponent } from './components/app-club-info/app-club-info.component';
import { AppPlayersComponent } from './components/app-players/app-players.component';

const routes: Routes = [
  {
    path: 'players',
    component: AppPlayersComponent
  },
  {
    path: 'club-info',
    component: AppClubInfoComponent
  },
  {
    path: 'libComponent',
    component: AtlPlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
