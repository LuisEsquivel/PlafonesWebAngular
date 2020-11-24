import { Component, OnInit , AfterViewInit} from '@angular/core';
import { Productos } from '../../models/productos';
import { Services } from '../../services/services';
import { generals } from '../../services/generals';
declare var $:any;


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

  providers: [Services]
})
export class NavComponent implements OnInit {

  public productos : Productos[];
  public g  = new generals();

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


  ngAfterViewInit() {

      $(".myselect").chosenImage({
                           placeholder_text_single: "BUSCAR PRODUCTO",
                           no_results_text: "Oops, no se encontró: ",
                           width: "calc(100% - 71.5%)",
                           search_contains: true //para que busque si escribes espacios
                       });
              
 }


}
