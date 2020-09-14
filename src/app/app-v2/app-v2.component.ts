import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
} from '@angular/core';
import { ItemERP } from 'src/model/item-erp';
import { DataService } from 'src/service/data.service';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-app-v2',
  templateUrl: './app-v2.component.html',
  styleUrls: ['./app-v2.component.scss'],
})
export class AppV2Component implements OnInit {
  itemSelected = '1';
  itemERP: ItemERP[] = [];
  positionItemERP: number[] = [0];
  scrollChange$ = new BehaviorSubject<number>(0);
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getItemSelected();
    this.getDataJSONFile();
    this.scrollChange$.pipe(debounceTime(200)).subscribe((position) => {
      console.log('AppV2Component -> ngOnInit -> position', position);
      if (position < this.positionItemERP[0] && position < 200) {
        this.dataService.updateItemSelected('', false);
        return;
      }
      this.getPositionElement();
      const indexPosition: any = this.positionItemERP.findIndex(
        (elt) => elt > position - 100
      );
      this.dataService.updateItemSelected(
        this.itemERP[indexPosition].id,
        false
      );
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    this.scrollChange$.next(window.pageYOffset);
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

  getPositionElement() {
    if (this.positionItemERP.length > 1 || this.itemERP.length === 0) {
      return;
    }
    this.positionItemERP = [];
    this.itemERP.forEach((item) => {
      const el = document.getElementById('item-erp-' + item.id) as HTMLElement;
      this.positionItemERP.push(el.offsetTop);
    });
  }
}
