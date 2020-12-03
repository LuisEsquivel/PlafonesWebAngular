import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RequieresInstalacionComponent } from './components/requieres-instalacion/requieres-instalacion.component';
import { HomeComponent } from './components/home/home.component';
import { CarruselHomeComponent } from './components/carrusel-home/carrusel-home.component';
import { AvisoPrivacidadComponent } from './components/aviso-privacidad/aviso-privacidad.component';
import { UneteEquipoComponent } from './components/unete-equipo/unete-equipo.component';

//cargar modulo de formularios para trabajar con los formularios
import {FormsModule} from '@angular/forms';

//Para trabajar con el objeto HTTP
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPopper } from 'angular-popper';

//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatSelectModule } from  '@angular/material/select';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule, } from  '@angular/material/icon';
import { MatListModule,  } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatProgressBarModule  } from '@angular/material/progress-bar';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    SucursalesComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    RewardsComponent,
    ContactoComponent,
    RequieresInstalacionComponent,
    HomeComponent,
    CarruselHomeComponent,
    AvisoPrivacidadComponent,
    UneteEquipoComponent,
    ProductosComponent,
    ProductoDetalleComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxPopper,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
