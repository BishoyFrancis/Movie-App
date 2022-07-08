import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RequestData } from '../trending/request-data';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpCLient:HttpClient) { }

  getMovies(type:string){
    return this._httpCLient.get<RequestData>(`https://api.themoviedb.org/3/trending/${type}/day?api_key=021319f713024b2729233237c8526d9f`)
  }


}
