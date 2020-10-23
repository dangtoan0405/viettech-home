import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemSelected = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  getDataJSONFile() {
    return this.http.get('assets/data/data.json');
  }

  getItemERPInJSON() {
    return this.http.get('assets/data/erp-item.json');
  }

  scrollIntoViewItemSelected() {
    setTimeout(() => {
      const el = document.getElementById(
        'item-erp-' + this.itemSelected.getValue()
      );
      if (!el) {
        return;
      }
      const topOffset = el.offsetTop - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }, 500);
  }
}
