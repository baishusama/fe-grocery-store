import { Component, OnInit } from '@angular/core';
import { SelectListTpl } from '../select-list.tpl';
import { DataService } from './../data.service';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent extends SelectListTpl implements OnInit {
  constructor(protected dataService: DataService) {
    super(dataService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
