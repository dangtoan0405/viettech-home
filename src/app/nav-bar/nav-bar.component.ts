import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
export interface ERPDetail {
  id: string;
  value: string;
  textSmall: string;
  textStrong: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() itemSelected: string;
  @Output() itemSelectedChange = new EventEmitter<string>();
  public listErp: ERPDetail[] = [
    {
      id: '1',
      value: 'about-VietTech',
      textSmall: 'Về',
      textStrong: 'VietTech',
    },
    {
      id: '2',
      value: 'solution-1',
      textSmall: 'Giải pháp',
      textStrong: 'Doanh nghiệp',
    },
    {
      id: '3',
      value: 'solution-2',
      textSmall: 'Giải pháp',
      textStrong: 'Marketing',
    },
    {
      id: '4',
      value: 'solution-3',
      textSmall: 'Giải pháp',
      textStrong: 'Website',
    },
    {
      id: '5',
      value: 'solution-4',
      textSmall: 'Giải pháp',
      textStrong: 'Mobile',
    },
    {
      id: '6',
      value: 'solution-4',
      textSmall: 'Liên hệ',
      textStrong: 'VietTech',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  selectItem(id: string) {
    this.itemSelected = id;
    this.itemSelectedChange.emit(id);
  }
}
