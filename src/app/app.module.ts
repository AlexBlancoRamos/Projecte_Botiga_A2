import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PeuComponent } from './peu/peu.component';
import { IniciComponent } from './inici/inici.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { ContacteComponent } from './contacte/contacte.component';
import { RegistreComponent } from './registre/registre.component';
import { RouterOutlet} from "@angular/router";
import { OfertesComponent } from './ofertes/ofertes.component';
import { PcComponent } from './pc/pc.component';
import { PerifericsComponent } from './periferics/periferics.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PeuComponent,
    IniciComponent,
    CatalegComponent,
    CistellaComponent,
    CondicionsComponent,
    ContacteComponent,
    RegistreComponent,
    OfertesComponent,
    PcComponent,
    PerifericsComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
