import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PlayerComponent } from "./player/player.component";
import { MainBlockComponent } from "./main-block/main-block.component";
import { DataService } from './data.service';
import { HealthBlockComponent } from "./health-block/health-block.component";
import { TextAreaComponent } from "./text-area/text-area.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, PlayerComponent, MainBlockComponent, HealthBlockComponent, TextAreaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  dataService:DataService;

  constructor () {
    this.dataService = new DataService();
  }
}
