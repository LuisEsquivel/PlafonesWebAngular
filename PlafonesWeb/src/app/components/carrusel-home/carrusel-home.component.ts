import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/services';
import { Productos } from '../../models/productos';
import { generals } from '../../services/generals';
import { PreProcessedFileInfo } from 'typescript';


@Component({
  selector: 'app-carrusel-home',
  templateUrl: './carrusel-home.component.html',
  styleUrls: ['./carrusel-home.component.css'],
  providers : [Services]
})
export class CarruselHomeComponent implements OnInit {

  public objeto : Productos;
  public productos : Productos[];
  public g = new generals();

  constructor(  
    private service : Services,
   ) { this.objeto = new Productos(); }

  ngOnInit(): void {

   
    this.objeto.MostrarEnProductosDestacadosBit = "1";
    this.service.Post(this.g.productosgetbyvalues, this.objeto).subscribe( 
      response=>{

        if(response){
          var contador = 1;
          this.productos = response.model;        
          this.productos.map( item =>{
              item.RutadefotoVar = item.RutadefotoVar.replace("~", "./assets");
              item.index = contador;
              contador++;       
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
