
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class Services {

    public url: string = "https://localhost:44320/api/productos/get";

    constructor(private httpClient: HttpClient) {
    }


    MostrarDestacados():Observable<any>{

        return this.httpClient.get(this.url);

    }

}