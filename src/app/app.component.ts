import { Component, signal, Signal, model, WritableSignal, inject, AfterViewInit} from '@angular/core';
import {NgClass} from '@angular/common'
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
//components
import { ModalConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';

interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

type emptyArray = []

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  template: `
    <h1>Hello</h1>
  `,
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatCheckboxModule, FormsModule, NgClass, MatDialogModule, WelcomeCardComponent],
  styleUrl: './app.component.scss'
})

export class AppComponent  {
  toDoList: WritableSignal<(ITodo)[] | emptyArray> = signal([]);
  description = model('');
  dialog = inject(MatDialog);
  selectedId: number = -1;

  saveFunc() {
    const obj: ITodo = {
      id: this.toDoList().length + 1,
      description: this.description(),
      done: false
    }

    this.toDoList.update((state: ITodo[]): ITodo[] => {

      return state = [...state, obj]
    })

    this.description.set('')
  }

  checkMarkChanged(index: number): void {
    this.toDoList()[index].done = !this.toDoList()[index].done
  }

  deleteConfirmation(id: number): void {
    this.dialog.open(ModalConfirmationComponent).afterClosed().subscribe((res: string) => {
      if (res === 'YES') {
        this.toDoList.update((state: ITodo[]): ITodo[] | emptyArray => {
          return state = state.filter((fTasks) => {
            return fTasks.id != id
          })
        })
      }
    })
  }

  editTask(task: ITodo) {
    this.selectedId = task.id;
    this.description.set(task.description);
  }

  updateTask(id: number) {

    this.toDoList.update((state: ITodo[]): ITodo[] => {

      const newState: ITodo[] = state.map((task: ITodo): ITodo => {
        if (task.id === id) {
          task.description = this.description();
          return task
        } else {
          return task
        }
      })

      return newState;
    })

    this.description.set('');

    this.selectedId = -1;
  }
}
