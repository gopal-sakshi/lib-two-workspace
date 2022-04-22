import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPlayersComponent } from './components/app-players/app-players.component';
import { AppClubInfoComponent } from './components/app-club-info/app-club-info.component';
import { ChelseaModule } from 'lib-two';

@NgModule({
  declarations: [
    AppComponent,
    AppPlayersComponent,
    AppClubInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PlayersChelseaComponent      // using this component in imports array --->
                                        // use JIT compiler error, something...
    ChelseaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
