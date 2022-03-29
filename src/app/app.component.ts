import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newdemo';
 msg:string;
 name:string;
 myusername:string;
 appArray:string[]=["Binding", "Display", "Services"];
 values:string='';
 
 constructor(){

 }
 clickEvent(){
   this.msg="button is clicked";
   return this.msg;
 }
 onKey(event:any){
   this.values =event.target.value + '|';
 }

}
