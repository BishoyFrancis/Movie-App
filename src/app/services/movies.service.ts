import { Credits } from './../trending/cast';
import { Provider } from './../trending/provider';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RequestData } from '../trending/request-data';
import { Route } from '@angular/router';
import { Watch } from '../trending/watch';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpCLient:HttpClient) { }

  getMovies(type:string){
    return this._httpCLient.get<RequestData>(`https://api.themoviedb.org/3/trending/${type}/day?api_key=021319f713024b2729233237c8526d9f`)
  }

  getPage(type:string,page:number){
    return this._httpCLient.get<RequestData>(`https://api.themoviedb.org/3/trending/${type}/day?&page=${page}&api_key=021319f713024b2729233237c8526d9f`)
  }

  getSearchPage(page:number,search:string=''){
    return this._httpCLient.get<RequestData>(`https://api.themoviedb.org/3/search/multi?query=${search}&page=${page}&api_key=021319f713024b2729233237c8526d9f`)
  }

  getDetails(type:string,id:number){
    return this._httpCLient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=021319f713024b2729233237c8526d9f`)
  }

  getCast(type:string,id:number){
    return this._httpCLient.get<Credits>(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=021319f713024b2729233237c8526d9f`)
  }

  getTralier(type:string,id:number){
    return this._httpCLient.get<Watch>(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=021319f713024b2729233237c8526d9f`)
  }

  getWatchProviders(type:string,id:number){
    return this._httpCLient.get<Provider>(`https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=021319f713024b2729233237c8526d9f`)
  }
  getSearch(searchWord:string){
    return this._httpCLient.get(`https://api.themoviedb.org/3/search/multi?query=${searchWord}&api_key=021319f713024b2729233237c8526d9f`)
  }

}
