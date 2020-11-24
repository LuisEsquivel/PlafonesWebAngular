import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { Services } from '../../services/services';
import { generals } from '../../services/generals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],

  providers: [Services]
})
export class ProductosComponent implements OnInit {

  public productos: Productos[];
  public g = new generals();

  constructor(private services: Services) { }

  ngOnInit(): void {

    this.services.Get(this.g.urlBase+this.g.productos+this.g.method).subscribe(

      res => {

        if (res != null) {
          this.productos = res.model;
          this.productos.map(item =>{
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

  
  }

}
