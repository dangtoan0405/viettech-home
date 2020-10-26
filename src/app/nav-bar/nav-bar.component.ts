import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { DataService } from 'src/service/data.service';
export interface ERPDetail {
  id: string;
  value: string;
  textStrong: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @Input() itemSelected = '';
  @Output() itemSelectedChange = new EventEmitter<string>();
  public listErp: ERPDetail[] = [
    {
      id: 'solution',
      value: 'solution',
      textStrong: ' Giải pháp Doanh nghiệp',
    },
    {
      id: 'customer',
      value: 'customer',
      textStrong: 'Khách Hàng',
    },
    {
      id: 'about-us',
      value: 'about-us',
      textStrong: 'Về Chúng Tôi',
    },
    {
      id: 'contact',
      value: 'contact',
      textStrong: 'Liên hệ',
    },
  ];
  constructor(private dataService: DataService) {}


  ngOnInit(): void {}

  ngAfterViewInit() {}
}
