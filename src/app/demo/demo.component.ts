import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Value : any;
  public AcceptValue(No : any)
  {
    console.log("Enter the text"+No);
    this.Value = No;
  }
}
