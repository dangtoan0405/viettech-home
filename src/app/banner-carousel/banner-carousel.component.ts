import { Component, OnInit } from '@angular/core';
import { ItemERPModel } from 'src/model/item-erp';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss'],
})
export class BannerCarouselComponent implements OnInit {
  listDataERP: ItemERPModel[] = [];
  constructor(private dataService: DataService) {
    this.getDataERP();
  }

  ngOnInit(): void {}

  getDataERP() {
    this.dataService.getItemERPInJSON().subscribe((dataERP: ItemERPModel[]) => {
      console.log(dataERP);

      this.listDataERP = dataERP;
    });
  }
}
