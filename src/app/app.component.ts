import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testDefontana';
  organismos: Array<any>=[];


  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getOrganismos().subscribe((resp: any) => {
      console.log(resp);
      this.organismos = resp;
    }
    );
  }    
}
