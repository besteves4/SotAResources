import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  ngOnInit() { }

  title = 'webapp';
  result = '';

  constructor(private http: HttpClient){
  }

  public testApp(): void {
    this.result = 'loading....';
    this.http.get('/sota/status', { responseType: 'text' }).subscribe((data: string) => {
      console.log(data);
      this.result = data;
    });
  }

}
