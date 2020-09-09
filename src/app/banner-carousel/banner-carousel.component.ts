import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { Router } from '@angular/router';

export interface BannerModel {
  name?: string;
  link?: string;
  imageUrl: string;
  backgroundColor?: string;
}
@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input() delayTime = 5000;
  dataSource: BannerModel[] = [
    {
      imageUrl: 'assets/images/erp.png',
      link: '',
    },
    {
      imageUrl: 'assets/images/solution.png',
      link: '',
    },
    {
      imageUrl: 'assets/images/mobile.png',
      link: '',
    },
    {
      imageUrl: 'assets/images/marketing.png',
      link: '',
    },
  ];
  public startIndex = 0;
  private setTimeOut;
  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.showSlidesVer2();
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    clearTimeout(this.setTimeOut);
  }

  showSlidesVer2() {
    this.startIndex++;
    if (this.startIndex > this.dataSource.length) {
      this.startIndex = 1;
    }
    this.setTimeOut = setTimeout(() => {
      this.showSlidesVer2();
    }, this.delayTime);
  }

  clickDotVer2(index: number) {
    clearTimeout(this.setTimeOut);
    this.startIndex = index;
    this.showSlidesVer2();
  }

  navigateNewPromotion(url: any) {
    window.open(url, '_blank');
  }
}
