import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
num1: string;
num2: string;
result: number;
name: string;
mobile: number;
errorMessage: string;


convertToInt(first: string, second: string){
  this.result=parseInt(first)+parseInt(second);
}
 
  constructor() { 
  }
  
  ngOnInit(): void {
  }
  onSubmit(formData: any) {
    var name = formData['name'];
  }
}
