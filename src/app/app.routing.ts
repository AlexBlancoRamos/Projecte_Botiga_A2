import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PeuComponent } from './peu/peu.component';
import { IniciComponent } from './inici/inici.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { OfertesComponent } from './ofertes/ofertes.component';
import { PcComponent } from './pc/pc.component';
import { PerifericsComponent } from './periferics/periferics.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { ContacteComponent } from './contacte/contacte.component';
import { RegistreComponent } from './registre/registre.component';
import { RouterOutlet} from "@angular/router";
import {ContrasenyaComponent} from "./contrasenya/contrasenya.component";

const routes: Routes =[
  {path: '', redirectTo: '/inici', pathMatch: 'full'},
  {path: 'inici', component: IniciComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'peu', component: PeuComponent},
  {path: 'cataleg', component: CatalegComponent},
  {path: 'ofertes', component: OfertesComponent},
  {path: 'pc', component: PcComponent},
  {path: 'periferics', component: PerifericsComponent},
  {path: 'cistella', component: CistellaComponent},
  {path: 'condicions', component: CondicionsComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: 'registre', component: RegistreComponent},
  {path: 'contrasenya', component: ContrasenyaComponent},
  {path: 'oulet', component: RouterOutlet},

];
export const routing = RouterModule.forRoot(routes);
