

//Importar los modulos de rutas de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { SucursalesComponent } from './components/sucursales/sucursales.component';




//Array de rutas
const appRoutes: Routes =[
    {path : 'sucursales', component:SucursalesComponent},

    //Ruta de error debe de ser la última siempre
   // {path : '**', component:ErrorComponent}
 ]
 


//Exportar el modulo de rutas
export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);