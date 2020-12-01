import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaPipe';
  name= 'hugo';
  myArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  myNum= 0.5891;
  salary = 10000.5
  ing= {
name: 'Hugo',
alias: 'Somnium',
song: 'Dream of you and me',
address: {
street: 'Lunas',
number: 3,
city: 'CDMX'}
};
myDate = new Date();
video = 'o-0ygW-B_gI';

  }

