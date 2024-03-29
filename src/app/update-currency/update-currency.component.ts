import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HomePageService } from '../home-page.service';


@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.css']
})
export class UpdateCurrencyComponent implements OnInit {
  items: any;
  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
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

   postData(){
      let dateTime = (<HTMLInputElement>document.querySelector('.startdate')).value;
      let startDate = new Date(dateTime)
      const jsonData = 
      {
         "currency": {
            "departments": this.items.json.departments
         },
         "date": startDate
      }
      document.querySelectorAll('*[data-department]').forEach((inp) => {
         let input = (inp as HTMLElement);
         let inputValue = (<HTMLInputElement>inp).value;
         let department = input.dataset.department;
         let curr = input.dataset.currency;
         let operation_index = undefined;
         let type = input.dataset.type;
         let operation = "buy";
         if(input.dataset.buy){
            operation = "buy";
            operation_index = input.dataset.buy;
         }else{
            operation = "sell";
            operation_index = input.dataset.sell;
         }
         jsonData.currency.departments[department!].currencies[curr!][operation][operation_index!][type!] = inputValue
      });
      let api = this.itemService.getApi();
      let bodyString = JSON.stringify(jsonData);
      this.http.post(`${api}/api/currency`, bodyString, this.httpOptions).subscribe();
   }
}