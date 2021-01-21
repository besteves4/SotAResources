import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
