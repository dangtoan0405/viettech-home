import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { ItemERP } from 'src/model/item-erp';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-viettech';
  itemSelected = '1';
  itemERP: ItemERP[] = [];
  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {
    this.translateService.setDefaultLang('vn');
    this.getDataJSONFile();
  }

  public selectItem(id: string) {
    this.itemSelected = id;
    this.gotoTop();
  }

  ngOnInit() {
    AOS.init({
      duration: 2000,
    });
  }

  getDataJSONFile() {
    this.http
      .get('assets/data.json')
      .subscribe((res: { itemERP: ItemERP[] }) => {
        this.itemERP = res.itemERP;
      });
  }

  gotoTop() {
    setTimeout(() => {
      const el = document.getElementById('item-erp-' + this.itemSelected);
      if (!el) {
        return;
      }
      el.scrollIntoView();
    }, 500);
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
