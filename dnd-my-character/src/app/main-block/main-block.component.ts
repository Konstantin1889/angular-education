import { AppComponent } from './../app.component';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-block',
  standalone: true,
  imports: [FormsModule, AppComponent],
  templateUrl: './main-block.component.html',
  styleUrl: './main-block.component.scss'
})
export class MainBlockComponent {
  @Input({required: true}) dataService!:DataService;

  mainStatsData!:IMainStatsData;
  skillsStatsData!:ISkillsStatsData;
  textAreaData!:ITextAreaData;
  checkboxData!:ICheckboxData;

  ngOnInit() {
    this.mainStatsData = this.dataService.mainStatsData as unknown as IMainStatsData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
    this.skillsStatsData = this.dataService.skillsStatsData as unknown as ISkillsStatsData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
    this.textAreaData = this.dataService.textAreaData as unknown as ITextAreaData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
    this.checkboxData = this.dataService.checkboxData as unknown as ICheckboxData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
  }

  saveFunction () {
    this.dataService.mainStatsData = this.mainStatsData;
    this.dataService.skillsStatsData = this.skillsStatsData;
    this.dataService.textAreaData = this.textAreaData;
    this.dataService.checkboxData = this.checkboxData;
    this.dataService.saveLocal();
  }
}
