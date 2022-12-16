import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PeuComponent } from './peu/peu.component';
import { IniciComponent } from './inici/inici.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CistellaComponent } from './cistella/cistella.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { ContacteComponent } from './contacte/contacte.component';
import { RegistreComponent } from './registre/registre.component';
import {RouterOutlet} from "@angular/router";

const routes: Routes =[
  {path: 'inici', component: IniciComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'peu', component: PeuComponent},
  {path: 'cataleg', component: CatalegComponent},
  {path: 'cistella', component: CistellaComponent},
  {path: 'condicions', component: CondicionsComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: 'registre', component: RegistreComponent},
  {path: 'oulet', component: RouterOutlet},

];
export const routing = RouterModule.forRoot(routes);
