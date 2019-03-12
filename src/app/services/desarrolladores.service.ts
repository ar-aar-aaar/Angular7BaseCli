import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { DesarrolladorModel } from "../model/desarrolador-model";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({providedIn: 'root', })
export class DesarrolladoresService{
    constructor(private dataService: DataService, private _http: HttpClient){

    }
    save(desarrollador: DesarrolladorModel){
        return this._http
       .post(`${this.dataService.urlApi}desarrolladores`, desarrollador, {responseType: 'json'})
       .pipe(catchError(this.dataService.handleError));
    }
}