import { Component, OnInit } from '@angular/core';
import { SelectListTpl } from '../select-list.tpl';
import { DataService } from './../data.service';

@Component({
  selector: 'app-nz-select-list',
  templateUrl: './nz-select-list.component.html',
  styleUrls: ['./nz-select-list.component.scss']
})
export class NzSelectListComponent extends SelectListTpl implements OnInit {
  constructor(protected dataService: DataService) {
    super(dataService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
