import { Component, OnInit } from '@angular/core';
import { SelectListTpl } from '../select-list.tpl';
import { DataService } from './../data.service';

@Component({
  selector: 'app-nz-select-grid-list',
  templateUrl: './nz-select-grid-list.component.html',
  styleUrls: ['./nz-select-grid-list.component.scss']
})
export class NzSelectGridListComponent extends SelectListTpl implements OnInit {
  constructor(protected dataService: DataService) {
    super(dataService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
