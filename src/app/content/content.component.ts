import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    private matD: MatDialog
  ) { }

  ngOnInit() {
  }

  openChildDialog(){
    const ref = this.matD.open(ChildComponent);
    console.log(ref);
    ref.afterClosed().subscribe(() => {
      console.log('Closed...');
    });
  }

}
