import { Component, OnInit } from '@angular/core';
import { EmailDto } from '../../models/email';
import { Services } from '../../services/services';
import { global } from '../../services/global';
declare var $ : any;
declare var require: any ;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');


@Component({
  selector: 'app-requieres-instalacion',
  templateUrl: './requieres-instalacion.component.html',
  styleUrls: ['./requieres-instalacion.component.css'],

  providers : [Services]
})
export class RequieresInstalacionComponent implements OnInit {

  public email : EmailDto;
  public g = new global();

  constructor(private services : Services) {
       this.email = new EmailDto();    
   }

  ngOnInit(): void {
  }


  onSubmit(){

    this.email.OrigenVar="Installation/EmailInstalacion";
    this.services.Post(this.g.urlBase+this.g.email+this.g.send, this.email).subscribe(

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
