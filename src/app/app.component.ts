import { Component, OnInit } from '@angular/core';
import { CustomerService } from './service/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'newdemo';
  msg: string;
  name: string;
  myusername: string;
  appArray: string[] = ["Binding", "Display", "Services"];
  values: string;
  customers: any;
  allEmployees:any=[];
  x:any;
  id:number;
  mySelect = '2';
  selectedValue: string ="Please Select";
    

  selected: string ="Please Select";
  selectedData: string;

  constructor(private service: CustomerService) {
    this.service.getData().subscribe(data => {
      this.customers = data;
      this.allEmployees = data;
      
      console.log(data);
      this.selectedData = this.customers;
    });
	
  }

  // selectChange() {
  //    this.selectedValue=this.CustomerService.getDropDownText(this.mySelect, this.customers)[0].username;
   
  // }

    applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      // filterValue = filterValue.toLowerCase();
    if(filterValue === '' ) {
        this.customers=this.allEmployees;
    } 
    else {
      this.customers = this.allEmployees.filter((employee:any) => employee.username.includes(filterValue));
      // console.log(filterValue);
     
   
    }
 }


//   applyFilter(filterValue: string) {
//     let filterValueLower = filterValue.toLowerCase();
//     if(filterValue === '' ) {
//         this.customers=this.allEmployees;
//     } 
//     else {
//       this.customers = this.allEmployees.filter((employee:any) => employee.username.includes(filterValueLower));
//     }
//  }
  clickEvent() {
    this.msg = "button is clicked";
    return this.msg;
  }
  onKey(event: any) {
    this.values = event.target.value;
  }
  
  ngOnInit() {
    console.log(this.selectedValue);
    this.selectedValue = this.customers.find((c:any) => c.id === "");
    this.allEmployees.get('username').setValue(this.selectedValue);
  }
  }
