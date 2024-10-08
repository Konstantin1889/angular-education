import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { characterData, characterCheckboxesData, characterTextAreasData } from './variables/app.variables';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  character = characterData;
  characterCheckboxes = characterCheckboxesData;
  characterTextAreas = characterTextAreasData;

  saveAllChanges(): void {

    Object.entries(this.character).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    Object.entries(this.characterCheckboxes).forEach(([key, value]) => {
      localStorage.setItem(key, value.toString());
    });

    Object.entries(this.characterTextAreas).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    console.log('All changes saved.');
  }
}
