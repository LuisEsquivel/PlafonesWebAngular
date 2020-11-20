import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { Services } from '../../services/services';
import { global } from '../../services/Global';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

  providers: [Services]
})
export class NavComponent implements OnInit {

  public productos : Productos[];
  public g  = new global();

  constructor(private services : Services) { }

  ngOnInit(): void {

    this.services.Get(this.g.urlBase+this.g.productos+this.g.method).subscribe(
 
      res=>{
           if(res){
             this.productos = res.model;
             this.productos.map(item => {
                item.RutadefotoVar = item.RutadefotoVar.replace("~", "./assets");
             });
           }else{
             this.productos = [];
           }
      },
      error=>{
        this.productos = []
      }
      

    );

  }

}
