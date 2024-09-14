import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { count, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labs1_23202236';
  message: string;
  counter: number;
  private intervalID: any;
  private counterStopper: any;
  constructor(){
    this.message =  "String interpolation is useful";
    this.counter  = 0;

    this.intervalID = setInterval(() => {
      this.counter++;
    }, 1000);


    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 21000); 
  }
}