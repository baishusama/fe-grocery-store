import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnChanges {
  /*@Input('pageObj')
    set pageObj(value) {
        if (value) {
            this.pageNavDataList = this.generatePageNavDataList(value);
        }
    }*/
  pageObj: any = {
    /*'count': 0,
        'limit': 10,
        'offset': 0*/
  };
  @Input() count;
  @Input() limit;
  @Input() offset;

  // @Input() pageObj$ = null;

  @Output() pageChange = new EventEmitter();
  pageNavDataList = [];

  constructor() {}

  /*ngOnInit() {
        this.pageObj$.subscribe(res => {
            this.pageObj = res;
            this.pageNavDataList = this.generatePageNavDataList(res);
        });
    }*/

  ngOnChanges(changes: SimpleChanges) {
    // update changed properties in this.pageObj
    for (const propName of Object.keys(changes)) {
      this.pageObj[propName] = changes[propName].currentValue;
    }
    this.updatePageNavDataList();
  }

  // Generate a new pageNavDataList according to this.pageObj
  updatePageNavDataList() {
    const count = this.pageObj.count || 0;
    const limit = this.pageObj.limit || 10;
    const offset = this.pageObj.offset || 0;

    const page = Math.ceil(count / limit) || 1;
    const current = Math.ceil((offset + 1) / limit) || 1;

    // const first = 1;
    // const last = page;

    const navList: any[] = [
      {
        type: 'number',
        display: current,
        value: current,
        isCurrent: true
      }
    ];

    // 当前页码附近的页码
    if (current - 1 >= 1) {
      navList.unshift({
        type: 'number',
        display: current - 1,
        value: current - 1
      });
    }
    if (current - 2 >= 1) {
      navList.unshift({
        type: 'number',
        display: current - 2,
        value: current - 2
      });
    }
    if (current + 1 <= page) {
      navList.push({
        type: 'number',
        display: current + 1,
        value: current + 1
      });
    }
    if (current + 2 <= page) {
      navList.push({
        type: 'number',
        display: current + 2,
        value: current + 2
      });
    }

    // 可能需要添加页码省略
    if (navList[0].display > 2) {
      navList.unshift({
        type: 'placeholder',
        display: '...'
        // disable: true
      });
    }
    if (navList[navList.length - 1].display < page - 1) {
      navList.push({
        type: 'placeholder',
        display: '...'
        // disable: true
      });
    }

    // 如果页码省略存在，需要添加“第一页”“最后一页”
    if (typeof navList[0].display === 'string' || navList[0].value > 1) {
      navList.unshift({
        type: 'number',
        display: 1,
        value: 1
      });
    }
    if (
      typeof navList[navList.length - 1].display === 'string' ||
      navList[navList.length - 1].value < page
    ) {
      navList.push({
        type: 'number',
        display: page,
        value: page
      });
    }

    // 添加可能需要 disable 的“上一页”“下一页”
    navList.unshift({
      type: 'button',
      display: '<',
      value: Math.max(current - 1, 1),
      isDisabled: current === 1
    });
    navList.push({
      type: 'button',
      display: '>',
      value: Math.min(current + 1, page),
      isDisabled: current === page
    });

    // 添加可能需要 disable 的“<<”“>>”

    this.pageNavDataList = navList;
  }

  navigateToPage(page) {
    if (typeof page !== 'number') {
      return;
    }

    const pageObj = Object.assign({}, this.pageObj, {
      offset: (page - 1) * this.pageObj.limit
    });
    this.pageChange.emit(pageObj);
  }
}
