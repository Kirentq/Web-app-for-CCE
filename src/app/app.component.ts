import { Component } from '@angular/core';
import { HomePageService } from '../app/home-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-cce';
  url: any;
  constructor(private itemService: HomePageService){}

  ngOnInit(): void {
    this.getCurrencyCourse();
  }
  
  getCurrencyCourse(){
    this.itemService.getApi()
  }
}
