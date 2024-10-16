import { DataService } from './../data.service';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input({required: true}) dataService!:DataService;

  playerData!:IPlayerData;

  ngOnInit() {
    this.playerData = this.dataService.playerData as unknown as IPlayerData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
  }

  saveFunction () {
    this.dataService.playerData = this.playerData;
    this.dataService.saveLocal();
  }
}
