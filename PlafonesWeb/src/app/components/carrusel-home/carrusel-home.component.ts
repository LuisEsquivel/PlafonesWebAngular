import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/services';
import { Productos } from '../../models/productos';


@Component({
  selector: 'app-carrusel-home',
  templateUrl: './carrusel-home.component.html',
  styleUrls: ['./carrusel-home.component.css'],
  providers : [Services]
})
export class CarruselHomeComponent implements OnInit {

  public productos : Productos[];

  constructor(  
    private service : Services,
   ) { }

  ngOnInit(): void {

       
    this.service.MostrarDestacados().subscribe( 

      response=>{

        if(response){

          this.productos = response.model;
          this.productos.map( item =>{
              item.RutadefotoVar = item.RutadefotoVar.replace("~", "./assets");
          });


        }else{
          this.productos = [];
        }
      
      }, 
      error=>{
         console.log(error);
         this.productos = [];
      }

     );

    

  }

}
