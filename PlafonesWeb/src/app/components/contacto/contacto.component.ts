import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/services';
import { EmailDto } from '../../models/email';
import { generals } from '../../services/generals';
declare var require: any ;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');
declare var $ :any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],

  providers : [Services]
})
export class ContactoComponent implements OnInit {

  public email : EmailDto;
  public g = new generals(); 

  constructor(private service : Services
             )
             {
                this.email = new EmailDto( );
             }


  ngOnInit(): void {
  }

 
  onSubmit(){

    
    this.email.OrigenVar="Contact/Email";
    this.service.Post(this.g.urlBase+this.g.email+this.g.send, this.email).subscribe(

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
