import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { RecaptchaModule , RecaptchaFormsModule} from 'ng-recaptcha';
import { NgApexchartsModule } from "ng-apexcharts";
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
import { ContrasenyaComponent } from './contrasenya/contrasenya.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbRating, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgChartsModule} from "ng2-charts";
import {DatePipe} from "@angular/common";
import { AdministracioComponent } from './administracio/administracio.component';


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
    ContrasenyaComponent,
    AdministracioComponent,
  ],
  imports: [
    NgApexchartsModule,
    BrowserModule,
    RouterOutlet,
    routing,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgbRating,
    NgbModule,
    NgChartsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
