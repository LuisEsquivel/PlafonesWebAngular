import { Component, OnInit } from '@angular/core';
import { Productos } from '../../models/productos';
import { Services } from '../../services/services';
import { Router, ActivatedRoute } from '@angular/router';
import { generals } from '../../services/generals';
import { EmailDto } from '../../models/email';
declare var require: any ;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');
declare var $ :any;


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  public producto : Productos;
  public productos : Productos[];
  public g : generals;
  public email : EmailDto;

  constructor(
    private services : Services,
    private router : Router,
    private activatedroute: ActivatedRoute
    ) { this.producto = new Productos(); 
        this.g = new generals(); 
        this.email = new EmailDto();
      }

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
            item.FichaTecnicaUrlVar = 'http://localhost:4200/assets/'+ item.FichaTecnicaUrlVar.replace("DATASHEETS", "Datasheets");
          });
     
          alert(JSON.stringify(this.productos));
      
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


  onSumbit(){

    this.email.OrigenVar = 'Productos/Details'; 
    this.email.NombreProductoVar = this.productos[0].NomProdVar;
    this.services.Post(this.g.urlBase+this.g.email+this.g.send, this.email ).subscribe( 

      res=>{
        if(res == "success"){
          
          swal("Correo Enviado!!", "Ok", "success");
          $("#form").trigger("reset");

        }else{swal("¡Algo salió mal al enviar el correo!", "Ok", "warning");}
      },
      error=>{
        swal("¡Algo salió mal al enviar el correo!", "Ok", "warning");
      }


    );

  }

}
