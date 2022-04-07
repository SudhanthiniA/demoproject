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
  selectedValue: any;
  
  yearSelected: any;
  facultySelected: any;
  
  dropDownProjectName: string = '';

  selected: string;
  selectedData: string;

  constructor(private service: CustomerService) {
    this.service.getData().subscribe(data => {
      this.customers = data;
      this.allEmployees = data;
      
      console.log(data);
      this.selectedData = this.customers;
    });
	
  }

  onSelect(val: any){
    console.log(val);
    this.selectedData = this.customers.filter((x:any) => x.value == val)
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
  selectedHandlerProjectName(event : any)
  {
    if(event.target.value != 'default') { this.dropDownProjectName = event.target.value;}
  }
  ngOnInit() {
    
  }
}
