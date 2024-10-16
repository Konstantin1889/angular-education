import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSaveService {
  storageGet (dataName:string) {
    if (localStorage.getItem(dataName)) {
      let data = localStorage.getItem(dataName) || '';
      return JSON.parse(data);
    } else if (dataName === 'Одиночные переменные') {
      return false
    } else {
      return {}
    }
  }

  storageSet (dataName:string, data:any) {
    let dataJson = JSON.stringify(data);
    localStorage.setItem(dataName, dataJson);
  }

  constructor() { }
}
