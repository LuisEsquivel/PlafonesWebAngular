import { Component, OnInit } from '@angular/core';
import { generals } from '../../services/generals';
import { EmailDto } from '../../models/email';
import { Services } from '../../services/services';
declare var $ : any;
declare var require: any ;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-unete-equipo',
  templateUrl: './unete-equipo.component.html',
  styleUrls: ['./unete-equipo.component.css'],

  providers: [Services]
})
export class UneteEquipoComponent implements OnInit {

  public email : EmailDto;
  public g = new generals();
  public validators = new Validators();
  public myForm : FormGroup;

  constructor(private service : Services, public fb: FormBuilder) {
    
    this.email = new EmailDto();  
  
    this.myForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
   this.email.AreaInteresVar = "";
  }

  


  onSubmit(){

    this.email.OrigenVar = "Home/JoinOurWorkTeam";
    
    this.service.Post(this.g.urlBase+this.g.email+this.g.send, this.email).subscribe(

      res=>{
          if(res){
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
