import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  faSearch = faSearch;

  ngOnInit() { }

  title = 'webapp';
  status = '';
  term: '';
  results = {};

  constructor(private http: HttpClient){
  }

  public getStatus(): void {
    this.status = 'loading....';
    this.http.get('/sota/status', { responseType: 'text' })
      .subscribe((data: string) => {
        console.log(data);
        this.status = data;
      });
  }
  
  public getRights(): void {
    const params = {
      text: this.term
    }

    this.http.get('/sota/rights', { params: params, responseType: 'json' })
      .subscribe((data: any) => {
        console.log('test ', data);
        this.results = data;
      });
  }

}
