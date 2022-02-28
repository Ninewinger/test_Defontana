import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // organismos ordenados por Parent
  organismos: Array<any> = [];
  
  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getOrganismos().subscribe((resp: any) => {
      console.log(resp.data);
      this.organismos = resp.data;
    }
    );
  }   
}
