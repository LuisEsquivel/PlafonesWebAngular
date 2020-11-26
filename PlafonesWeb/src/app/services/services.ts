
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class Services {

    constructor(private httpClient: HttpClient) {
    }


    Get(url):Observable<any>{

        return this.httpClient.get(url);

    }


    Post(url, objeto):Observable<any>{

        let o = JSON.stringify(objeto);
        let headers = new HttpHeaders().set("Content-Type" , "application/json")
        return this.httpClient.post(url , o, {headers:headers});

    }


}