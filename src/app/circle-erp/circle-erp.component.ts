import { Component, OnInit } from '@angular/core';
import { ItemERPModel } from 'src/model/item-erp';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-circle-erp',
  templateUrl: './circle-erp.component.html',
  styleUrls: ['./circle-erp.component.scss'],
})
export class CircleERPComponent implements OnInit {
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

  scrollToItem(idElement: string) {
    setTimeout(() => {
      const el = document.getElementById(idElement);
      if (!el) {
        return;
      }
      const topOffset = el.offsetTop - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }, 500);
  }
}
