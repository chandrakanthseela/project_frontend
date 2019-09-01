import { Component } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShoppingList';
  constructor(
    private matD: MatDialog
  ){

  }
  openDialog(){
    this.matD.open(ContentComponent, {
      disableClose: true
    });
  }
}
