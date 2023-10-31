import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataToPass : {sn: string, tn: string}[] = [
    {sn: 'apple', tn: 'Apple'},
    {sn: 'lemon', tn: 'Lemon'},
    {sn: 'lime', tn: 'Lime'},
    {sn: 'orange', tn: 'Orange'},
    {sn: 'strawberry', tn: 'Strawberry'},
    ]
  displayKey : string = 'tn';
  searchKeys : string[] = ['sn', 'tn'];
  color : ThemePalette = 'primary';
  title : string = 'Fruits';
  appearance : string = 'outline';

  onSelectitems(event: any) {
    console.log('event', event)
  }
}
