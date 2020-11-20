import { Component, OnInit } from '@angular/core';
import { Sucursales } from '../../models/sucursales';
import { Services } from '../../services/services';
import { global } from '../../services/Global';
import { DomSanitizer } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],

  providers: [Services]
})
export class SucursalesComponent implements OnInit {

  public sucursales: Sucursales[];
  public g = new global();

  constructor(private services: Services,
              private dom : DomSanitizer) { }

  ngOnInit(): void {

    this.services.Get(this.g.urlBase+this.g.sucursales+this.g.method).subscribe(

      res => {
        if (res) {
          this.sucursales = res.model;
          this.sucursales.map(item=>{
            item.MapaVar = this.dom.bypassSecurityTrustResourceUrl(item.MapaVar);
          });

        } else {
          this.sucursales = [];
        }
      },

      error => {
        this.sucursales = [];
      }

    );


  }

}
