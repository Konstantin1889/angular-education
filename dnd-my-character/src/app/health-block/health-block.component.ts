import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-health-block',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './health-block.component.html',
  styleUrl: './health-block.component.scss'
})
export class HealthBlockComponent {

  @Input({required: true}) dataService!:DataService;

  textAreaData!:ITextAreaData;
  healthData!:IHealthData;
  checkboxData!:ICheckboxData;

  ngOnInit() {
    this.textAreaData = this.dataService.textAreaData as unknown as ITextAreaData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
    this.healthData = this.dataService.healthData as unknown as IHealthData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
    this.checkboxData = this.dataService.checkboxData as unknown as ICheckboxData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
  }

  saveFunction () {
    this.dataService.textAreaData = this.textAreaData;
    this.dataService.healthData = this.healthData;
    this.dataService.checkboxData = this.checkboxData;
    this.dataService.saveLocal();
  }
}
