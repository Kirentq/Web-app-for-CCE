import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HomePageService } from '../home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items: any;
  constructor(private http: HttpClient, private itemService: HomePageService) {
  }

  ngOnInit(): void {
    this.showData();
  }
  showData() {
    let data = this.itemService.getData();
    data.subscribe(res => {
      this.items = res;
    });
  }

}
