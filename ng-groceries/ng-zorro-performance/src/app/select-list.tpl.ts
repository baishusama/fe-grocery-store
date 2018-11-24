import { OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Selects } from './selects.model';

export abstract class SelectListTpl implements OnInit {
  selects: Selects = [];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.dataService.getStaticSelects().subscribe(selects => {
      this.selects = selects;
    });
  }
}
