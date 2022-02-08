import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})
export class HttpService {

    constructor (private _httpClient: HttpClient) {
    }

    //TODO Add T variable type as an option. Automatic json => class conversion
    public post (url: string, body: any, options: any): Observable<any> {
        return this._httpClient.post (url, body, options);
    }

    public get (url: string, options: any): Observable<any> {
        return this._httpClient.get (url, options);
    }
}
