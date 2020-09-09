import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-viettech';
  itemSelected = '';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('vn');
  }

  public selectItem(id: string) {
    this.itemSelected = id;
    this.gotoTop();
  }

  gotoTop() {
    const el = document.getElementById('targetView');
    el.scrollIntoView();
  }
}
