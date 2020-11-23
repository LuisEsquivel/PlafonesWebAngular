
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


    Post(url, email):Observable<any>{

        let objeto = JSON.stringify(email);
        let headers = new HttpHeaders().set("Content-Type" , "application/json")
        return this.httpClient.post(url , objeto, {headers:headers});

    }

}