import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

const URL_IMBD = "https://api.themoviedb.org/3/";
const API_KEY = "6d05879e1d2ae03f501150844b4d693b";

@Injectable({
  providedIn: 'root'
})

export class ImdbApiService {

  constructor(private httpClient: HttpClient) { }

  getMovie(title, language): Observable <any>{
    var url = URL_IMBD + 'search/movie?api_key=' + API_KEY + '&language='+ language + '&query=' + title + '&page=1&include_adult=false'
    return this.httpClient.get(url);
  }
}