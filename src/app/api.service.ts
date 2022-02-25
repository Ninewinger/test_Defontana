import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class ApiService {
    _url = "https://test.defontana.com/";
    constructor(private http: HttpClient) { 
        console.log("ApiService constructor");
    }
    getOrganismos() {
        let headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");

        return this.http.get(this._url, { headers: headers });
    }
}