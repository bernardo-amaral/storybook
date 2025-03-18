import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  standalone: true,
  imports: [CommonModule],
  template: `<p>teste</p>`,
})
export class CustomComponent {}
