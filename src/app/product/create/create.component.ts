import {Component, Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'product-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateProductComponent {

  constructor(public dialogRef: MatDialogRef<CreateProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.data.canceled = true;
    this.dialogRef.close();
  }

}
