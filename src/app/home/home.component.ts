import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ImdbApiService } from './../shared/services/imdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = [
    {value: 'english-0', viewValue: 'English'},
    {value: 'portuguese-1', viewValue: 'Portuguese'},
    {value: 'spanish-2', viewValue: 'Spanish'}
  ];

  title = '';
  movie : any;

  constructor(private imbdApi: ImdbApiService) {
  }

  ngOnInit() {
  }

  public getMovie(){
    console.log(this.title);
    this.imbdApi.getMovie(this.title, 'es-es').subscribe(data =>{
      console.log(data);
      this.movie = data;
    })
  }
  

}
