import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'home-viettech';
  itemSelected = '';
  constructor(
    private translateService: TranslateService,
    private dataService: DataService
  ) {
    this.translateService.setDefaultLang('vn');
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById('navbar').classList.add('nav-bar--scrolling');
      document.getElementById('moveTop').style.display = 'block';
    } else {
      document.getElementById('navbar').classList.remove('nav-bar--scrolling');
      document.getElementById('moveTop').style.display = 'none';
    }
  }

  ngOnInit() {
    AOS.init({
      duration: 2000,
    });
  }

  moveOnTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
