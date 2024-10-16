import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {

  @Input({required: true}) dataService!:DataService;

  textAreaData!:ITextAreaData;

  ngOnInit() {
    this.textAreaData = this.dataService.textAreaData as unknown as ITextAreaData; //Поменять, чтоб сервис сам выдавал функцию. И соответственно, чтоб считывал
  }

  saveFunction () {
    this.dataService.textAreaData = this.textAreaData;
    this.dataService.saveLocal();
  }
}
