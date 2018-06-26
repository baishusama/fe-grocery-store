import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-dj',
  templateUrl: './pagination-dj.component.html',
  styleUrls: ['./pagination-dj.component.scss']
})
export class PaginationDjComponent implements OnInit {
  pageObj = {
    limit: 10,
    offset: 0,
    count: 11
  };

  constructor() {}

  ngOnInit() {}
}
