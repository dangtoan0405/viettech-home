import { Component, OnInit } from '@angular/core';
import { ItemERP } from 'src/model/item-erp';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-app-v2',
  templateUrl: './app-v2.component.html',
  styleUrls: ['./app-v2.component.scss'],
})
export class AppV2Component implements OnInit {
  itemSelected = '1';
  itemERP: ItemERP[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getItemSelected();
    this.getDataJSONFile();
  }

  getItemSelected() {
    this.dataService.getItemSelectedAsObservable().subscribe((res) => {
      this.itemSelected = res;
    });
  }

  getDataJSONFile() {
    this.dataService
      .getDataJSONFile()
      .subscribe((res: { itemERP: ItemERP[] }) => {
        console.log('AppV1Component -> getDataJSONFile -> res', res);
        this.itemERP = res.itemERP;
      });
  }

  collapseDescription(elementId) {
    const el = document.getElementById(
      elementId + '-description'
    ) as HTMLElement;
    const elParent = document.getElementById(
      elementId + '-description-title'
    ) as HTMLElement;
    if (el) {
      if (el.style.display === 'block' || !el.style.display) {
        el.style.display = 'none';
        elParent.classList.add('active-down');
      } else {
        el.style.display = 'block';
        elParent.classList.remove('active-down');
      }
    }
  }
}
