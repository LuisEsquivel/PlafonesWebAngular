import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { Services } from '../../services/services';
import { Router, ActivatedRoute } from '@angular/router';
import { generals } from '../../services/generals';



@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  public producto : Productos;
  public productos : Productos[];
  public g : generals;
  constructor(
    private services : Services,
    private router : Router,
    private activatedroute: ActivatedRoute
    ) { this.producto = new Productos(); this.g = new generals(); }

  ngOnInit(): void {

    this.activatedroute.params.subscribe( params => {

   var CveProdVar = params['CveProdVar'] != null ? params['CveProdVar'] : null;
  

    this.producto.CveProdVar = CveProdVar;
    this.services.GetByValues(this.g.productosgetbyvalues, this.producto).subscribe(

      res => {

        if (res != null) {
          this.productos = res.model;
          this.productos.map( item=>{
            item.RutadefotoVar = item.RutadefotoVar.replace("~","./assets");
          });
     
        } else {
          this.productos = [];
        }

      },

      error => {
        this.productos = [];
      }

    );

    
  });
     

  }

}
