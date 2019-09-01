import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<any>
  ) { }

  ngOnInit() {
  }

  closeDialog(){
    this.matDialogRef.close();
  }

}
