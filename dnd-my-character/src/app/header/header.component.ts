import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isToggled: boolean = false;  // Переменная для отслеживания состояния

  toggle() {
    this.isToggled = !this.isToggled;  // Изменение значения переменной
  }
}
