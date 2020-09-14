import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { ItemERP } from 'src/model/item-erp';
import { DataService } from 'src/service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-viettech';
  itemSelected = '';
  itemERP: ItemERP[] = [];
  constructor(
    private translateService: TranslateService,
    private dataService: DataService
  ) {
    this.translateService.setDefaultLang('vn');
    this.getDataJSONFile();
  }

  ngOnInit() {
    this.getItemSelected();
    AOS.init({
      duration: 2000,
    });
  }

  public selectItem(id: string) {
    this.itemSelected = id;
    this.dataService.updateItemSelected(id);
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
