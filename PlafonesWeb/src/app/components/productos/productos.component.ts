import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { Services } from '../../services/services';
import { generals } from '../../services/generals';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],

  providers: [Services]
})
export class ProductosComponent implements OnInit {

  public producto : Productos;
  public productos: Productos[];
  public g = new generals();

  constructor(private services: Services, private router:Router, private activatedroute : ActivatedRoute) 
  { this.producto = new Productos(); }

  ngOnInit(): void {


    this.activatedroute.params.subscribe( params => {

      var clase = params['clase'] != null ? params['clase'] : null;
      var subclase = params['subclase'] != null ? params['subclase'] : null;
     

  
    this.producto.CveClaseVar = clase;
    this.producto.CveSubclaseVar = subclase;
    this.services.GetByValues(this.g.productosgetbyvalues, this.producto).subscribe(

      res => {

        if (res != null) {
          this.productos = res.model;
          this.productos.map(item =>{
             item.RutadefotoVar = item.RutadefotoVar.replace("~","./assets");
             item.index += 1;
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
