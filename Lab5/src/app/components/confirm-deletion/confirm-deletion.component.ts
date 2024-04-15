import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-deletion',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './confirm-deletion.component.html',
  styleUrl: './confirm-deletion.component.css'
})
export class ConfirmDeletionComponent {
  @Output() deleteConfirmed = new EventEmitter<void>();
  

  confirmDelete() {
    this.deleteConfirmed.emit();
  }

  cancelDelete() {
  }
}
