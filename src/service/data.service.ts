import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemERP } from 'src/model/item-erp';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemSelected = new BehaviorSubject<string>('');
  constructor(private http: HttpClient) {}

  getDataJSONFile() {
    return this.http.get('assets/data.json');
  }

  updateItemSelected(itemId: string) {
    this.itemSelected.next(itemId);
    this.scrollIntoViewItemSelected();
  }

  getItemSelectedAsObservable() {
    return this.itemSelected.asObservable();
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
