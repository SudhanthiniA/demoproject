import { Component } from '@angular/core';
import { CustomerService } from './service/customer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newdemo';
  msg: string;
  name: string;
  myusername: string;
  appArray: string[] = ["Binding", "Display", "Services"];
  values: string = '';
  customers: any;

  constructor(private service: CustomerService) {
    this.service.getData().subscribe(data => {
      this.customers = data;
      console.log(data);
    });
  }

  clickEvent() {
    this.msg = "button is clicked";
    return this.msg;
  }
  onKey(event: any) {
    this.values = event.target.value;
  }

}
