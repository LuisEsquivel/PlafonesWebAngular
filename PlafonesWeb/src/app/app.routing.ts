

//Importar los modulos de rutas de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import {RewardsComponent} from './components/rewards/rewards.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {RequieresInstalacionComponent} from './components/requieres-instalacion/requieres-instalacion.component';
import {HomeComponent} from './components/home/home.component';
import {AvisoPrivacidadComponent} from './components/aviso-privacidad/aviso-privacidad.component';
import {UneteEquipoComponent} from './components/unete-equipo/unete-equipo.component';


//Array de rutas
const appRoutes: Routes =[
    {path : '', component:HomeComponent},
    {path : 'home', component:HomeComponent},
    {path : 'sucursales', component:SucursalesComponent},
    {path : 'rewards', component:RewardsComponent},
    {path : 'contacto', component:ContactoComponent},
    {path : 'rewards', component:ContactoComponent},
    {path : 'requieres-instalacion', component:RequieresInstalacionComponent},
    {path : 'aviso-de-privacidad', component:AvisoPrivacidadComponent},
    {path : 'unete-al-equipo', component:UneteEquipoComponent},
    //Ruta de error debe de ser la última siempre
   // {path : '**', component:ErrorComponent}
 ]
 


//Exportar el modulo de rutas
export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);