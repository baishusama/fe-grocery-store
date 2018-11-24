import { Component, OnInit } from '@angular/core';
import { SelectListTpl } from '../select-list.tpl';
import { DataService } from './../data.service';

@Component({
  selector: 'app-mat-select-list',
  templateUrl: './mat-select-list.component.html',
  styleUrls: ['./mat-select-list.component.scss']
})
export class MatSelectListComponent extends SelectListTpl implements OnInit {
  constructor(protected dataService: DataService) {
    super(dataService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
