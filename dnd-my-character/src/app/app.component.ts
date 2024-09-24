import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dnd-my-character';
  userName: string = '';
  charName: string = '';
  charClass: string = '';
  charOrigin: string = '';
  charRace: string = '';
  charWorldView: string = '';
  charXP: string = '';

  ngOnInit(): void {
    // Загружаем сохраненное имя пользователя и класс персонажа из localStorage
    const savedUserName = localStorage.getItem('userName');
    const savedClass = localStorage.getItem('charClass');
    const savedOrigin = localStorage.getItem('charOrigin');
    const savedName = localStorage.getItem('charName');
    const savedRace = localStorage.getItem('charRace');
    const savedWorldView = localStorage.getItem('charWorldView');
    const savedXP = localStorage.getItem('charXP');

    if (savedUserName) {
      this.userName = savedUserName;
    }

    if (savedName) {
      this.charName = savedName;
    }

    if (savedClass) {
      this.charClass = savedClass;
    }

    if (savedOrigin) {
      this.charOrigin = savedOrigin;
    }

    if (savedRace) {
      this.charRace = savedRace;
    }

    if (savedWorldView) {
      this.charWorldView = savedWorldView;
    }

    if (savedXP) {
      this.charXP = savedXP;
    }
  }

  saveAllChanges(): void {
    // Сохраняем все изменения в localStorage
    localStorage.setItem('charName', this.charName);
    localStorage.setItem('charClass', this.charClass);
    localStorage.setItem('charOrigin', this.charOrigin);
    localStorage.setItem('userName', this.userName);
    localStorage.setItem('charRace', this.charRace);
    localStorage.setItem('charWorldView', this.charWorldView);
    localStorage.setItem('charXP', this.charXP);

    console.log('All changes saved:');
    console.log('User name:', this.charName);
    console.log('Character class:', this.charClass);
    console.log('Character origin:', this.charOrigin);
    console.log('Character origin:', this.userName);
    console.log('Character race:', this.charRace);
    console.log('Character WorldView:', this.charWorldView);
    console.log('Character XP:', this.charXP);
  }
}
