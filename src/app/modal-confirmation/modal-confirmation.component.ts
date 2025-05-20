import { Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmation',
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogModule],
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.scss'
})
export class ModalConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<ModalConfirmationComponent>) {
  }

  closeDialog(message: string) {
    this.dialogRef.close(message)
  }
}
