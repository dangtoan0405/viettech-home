import { Component, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-viettech';
  itemSelected = '1';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('vn');
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

  gotoTop() {
    // const el = document.getElementById('targetView');
    // el.scrollIntoView();
  }
}
